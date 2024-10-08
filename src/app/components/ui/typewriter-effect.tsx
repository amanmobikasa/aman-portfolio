"use client";

import { cn } from "@/app/utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FlipWords } from "./flip-words";

// export const TypewriterEffect = ({
//   words,
//   className,
//   cursorClassName,
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   // split text inside of words into array of characters
//   const wordsArray = words.map((word) => {
//     return {
//       ...word,
//       text: word.text.split(""),
//     };
//   });

//   const [scope, animate] = useAnimate();
//   const isInView = useInView(scope);
//   useEffect(() => {
//     if (isInView) {
//       animate(
//         "span",
//         {
//           display: "inline-block",
//           opacity: 1,
//           width: "fit-content",
//         },
//         {
//           duration: 0.3,
//           delay: stagger(0.1),
//           ease: "easeInOut",
//         }
//       );
//     }
//   }, [isInView]);

//   const renderWords = () => {
//     return (
//       <motion.div ref={scope} className="inline">
//         {wordsArray.map((word, idx) => {
//           return (
//             <div key={`word-${idx}`} className="inline-block">
//               {word.text.map((char, index) => (
//                 <motion.span
//                   initial={{}}
//                   key={`char-${index}`}
//                   className={cn(
//                     `dark:text-white text-black opacity-0 hidden`,
//                     word.className
//                   )}
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//               &nbsp;
//             </div>
//           );
//         })}
//       </motion.div>
//     );
//   };
//   return (
//     <div
//       className={cn(
//         "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
//         className
//       )}
//     >
//       {renderWords()}
//       <motion.span
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string | string[];
    className?: string;
    anotherComponent ?: boolean
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters

  const markerRef = useRef<any>()
  const [hidden, setHidden] = useState<boolean | undefined>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      markerRef.current?.classList.add('ml-[2rem]');
      setHidden(true);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);


  // const wordsArray = words.map((word) => {
  //   return {
  //     ...word,
  //     text: Array.isArray(word?.text) ? "" : word.text.split(""),
  //   };
  // });

  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: Array.isArray(word?.text) ? word.text : word.text.split(""),
    };
  });

  // console.log("wordarray", wordsArray);

  const renderWords = () => {
   
    return (
      <div className="space-x-1">
        {wordsArray?.map((word, idx) => {
          if(word?.anotherComponent){
            return <FlipWords words={word.text} className={word.className}/>
          }
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word?.text?.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`text-white text-[2.5rem] lg:text-[9.8rem] space-y-7 font-ubuntu`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  

  return (
    <div className={cn("flex space-x-1  lg:my-6", className)}>
      <motion.div
        className="pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-7xl font-bold"
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        hidden={hidden}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-[28rem] ml-[1rem] bg-yellow-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
