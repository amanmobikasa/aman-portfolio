import React from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "./animated-tooltip";
import Link from "next/link";

interface SocialMediaComponentProps {
  socialMediaData: {
    id: number;
    name: string;
    icon: React.ReactNode;
    designation: string;
    link : string;
  }[];
}

function SocialMediaComponent({ socialMediaData }: SocialMediaComponentProps) {
  return (
    <>
      <div className="w-full mx-auto h-fit z-30">
        <div className="w-full">
          <div className="w-full flex justify-between gap-x-3 lg:gap-x-[3rem] ">
            {/* item 1 */}
            {socialMediaData.length > 0 &&
              socialMediaData?.map((item, index) => {
                return (
                  <>
                    <motion.div
                    key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 600,
                        damping: 10,
                      }}
                      whileHover={{scale : 1.3, transition : {delay : 0, duration : 0.5, ease : "easeInOut"}}}
                      className="cursor-pointer"
                    >
                      <AnimatedTooltip item={{ id: index, name: item?.name }}>
                        <Link href={item?.link} target="_" >{item?.icon}</Link>
                      </AnimatedTooltip>
                    </motion.div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMediaComponent;
