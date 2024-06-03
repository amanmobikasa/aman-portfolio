"use client";
import { ArrowDownToLine, Brain, Menu } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

type NavbarProps = {
  children?: React.ReactNode | React.ReactNode[];
};

function Navbar({ children }: NavbarProps) {
  return (
    <>
      <nav className="w-full overflow-hidden h-fit bg-transparent">
        <ul className="flex justify-between items-center py-[3rem] px-[2rem] w-full">
          <div>
            <li>
              <Brain className="text-[3rem] text-white  cursor-pointer hover:animate-pulse" />
            </li>
          </div>
          <div className="flex items-center justify-end gap-x-[3rem]">
            <li>
              <motion.button initial={{backgroundColor : "black", y : -100, opacity : 0}} animate={{backgroundColor : "white", color : "black", y : 0, opacity : 1, transition : {duration : 2, delay : 1.4, ease : "easeInOut"}}} whileHover={{backgroundColor : "black", color : "white", x : "5"}} transition={{duration : 0.5, delay : 0.5, ease : "easeInOut", type : "spring", stiffness : 800, damping : 10}}  className='px-6 py-2 skey-y-12 font-ubuntu text-sm font-bold border-[0.01rem] border-white transition-colors cursor-pointer duration-500 delay-150 ease-in-out  flex items-center justify-between gap-x-4 hover:animate-pulse'>Download Resume <span> <ArrowDownToLine className="h-4" /> </span> </motion.button>
            </li>
            <li>
              <Menu className="text-[3rem] text-white cursor-pointer hover:animate-pulse" />
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
