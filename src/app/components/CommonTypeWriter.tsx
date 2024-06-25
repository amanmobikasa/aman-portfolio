"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";

type TypewriterEffectSmoothDemoProps = {
    wordArray : {text : string}[]
}

export function TypewriterEffectSmoothDemo({wordArray} : TypewriterEffectSmoothDemoProps) {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
    <div className="absolute left-[3rem] top-0 bottom-0 my-auto  mx-auto   w-[30%] z-0  bg-transparent">
            <div className="p-3 flex flex-col justify-center w-full h-full ">
                {/* <motion.h2 initial={{opacity : 0, x : -100}} animate={{opacity : 1, x : 0}} transition={{duration : 2, delay : 1.4, ease : "easeInOut", type : "spring", stiffness : 800, damping : 10, }} whileHover={{scale : 1.1, transition : {delay : 0 ,duration : 0.5,  ease : "easeInOut"}}}  className="text-white text-[9rem] leading-tight font-ubuntu font-[600]">Hi, I'm Aman</motion.h2> */}
                <motion.div initial={{opacity : 0, x : -100}} animate={{opacity : 1, x : 0}} transition={{duration : 2, delay : 1.4, ease : "easeInOut", type : "spring", stiffness : 800, damping : 10, }}>
                   <TypewriterEffectSmooth words={wordArray ?? words} />
                </motion.div>
            </div>
        </div>
    </>
  );
}
