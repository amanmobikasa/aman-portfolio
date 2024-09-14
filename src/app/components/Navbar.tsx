"use client";
import { ArrowDownToLine, Brain, Menu } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "./ui/animated-tooltip";

type NavbarProps = {
  children?: React.ReactNode | React.ReactNode[];
  onOpen ?: () => void
};

function Navbar({ children, onOpen }: NavbarProps) {
  return (
    <>
      <nav className="w-full overflow-hidden h-fit bg-transparent">
        <ul className="flex justify-between items-center py-[3rem] lg:px-[2rem] w-11/12 mx-auto">
          <div>
            <motion.li initial={{opacity : 0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:3, delay : 2, ease:"easeInOut", type:"spring", stiffness:600, damping:10}} whileHover={{scale:1.4, transition:{duration:0.5, ease:"easeInOut"}}}>
              <AnimatedTooltip item={{id : 1, name : "How Brain Works"}}>
                <Brain className="text-[3rem] text-white  cursor-pointer hover:animate-pulse" />
              </AnimatedTooltip>
            </motion.li>
          </div>
          <div className="flex items-center justify-end gap-x-[3rem]">
            <li>
              <AnimatedTooltip item={{id : 1, name:"Download Resume Now"}}>
                 <motion.button initial={{backgroundColor : "black", y : -100, opacity : 0}} animate={{backgroundColor : "white", color : "black", y : 0, opacity : 1, transition : {duration : 2, delay : 1.4, ease : "easeInOut"}}} whileHover={{backgroundColor : "black", color : "white", x : "5"}} transition={{duration : 0.5, delay : 0.5, ease : "easeInOut", type : "spring", stiffness : 800, damping : 10}}  className='lg:px-6 px-4 py-2 skey-y-12 font-ubuntu text-sm font-bold border-[0.01rem] border-white transition-colors cursor-pointer duration-500 delay-150 ease-in-out  flex items-center justify-between gap-x-4 hover:animate-pulse '>Download Resume <span> <ArrowDownToLine className="h-4" /> </span> </motion.button>
              </AnimatedTooltip>
            </li>
            <motion.li initial={{opacity : 0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:3, delay : 2, ease:"easeInOut", type:"spring", stiffness:600, damping:10}} whileHover={{scale:1.4, transition:{duration:0.5, ease:"easeInOut"}}}>
              <AnimatedTooltip item={{id : 1, name : "Menu"}}>
                <Menu onMouseDown={onOpen} className="text-[3rem] text-white cursor-pointer hover:animate-pulse " />
              </AnimatedTooltip>
            </motion.li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
