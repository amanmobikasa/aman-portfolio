import BasicLayout from "@/app/layout/basiclayout";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { AnimatedTooltip } from "./animated-tooltip";

interface SocialMediaComponentProps {
  socialMediaData: {
    id: number;
    name: string;
    icon: React.ReactNode;
    designation: string;
  }[];
}

function SocialMediaComponent({ socialMediaData }: SocialMediaComponentProps) {
  return (
    <>
      <BasicLayout>
        <div className="w-3/12 mx-auto h-fit z-30">
          <div className="w-full flex justify-evenly gap-x-5 ">
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
                        {/* <Linkedin className="h-6 w-6 text-white hover:text-blue-800" /> */}
                        {item?.icon}
                      </AnimatedTooltip>
                    </motion.div>
                  </>
                );
              })}
          </div>
        </div>
      </BasicLayout>
    </>
  );
}

export default SocialMediaComponent;
