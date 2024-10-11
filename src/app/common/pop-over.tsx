"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
// import { IconSquareRoundedX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useSoundFunc } from "../utils/use-sound-func";



interface MultiStepLoaderDemo {
    children : React.ReactNode | React.ReactNode[]
    onClose : (loading : boolean) => void;
    onOpen : boolean;
}


export function MultiStepLoaderDemo({children, onClose, onOpen} : MultiStepLoaderDemo) {
  const [loading, setLoading] = useState(()=> onOpen ? onOpen : false);
  const {playNow,pauseNow} = useSoundFunc('/assets/audio/mouse-click.wav');

  const handleClose = () => {
    setLoading(false);
    onClose(false);
  };

  useEffect(()=>{
      const handlePlay = () => {
        playNow();
      }
    document.addEventListener('click', handlePlay)
    return ()=> {
      document.removeEventListener('click', handlePlay)
    }

  },[playNow])

  return (
    <div className="w-full h-[100vh] bg-[#222] bg-opacity-75 backdrop-blur-xl  absolute top-0 left-0 z-[100] text-white overflow-y-auto overflow-x-hidden">
      <div className="blur-none z-10">
      {children}
      </div>
      {loading && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type:"spring", stiffness: 600, damping: 10 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.5 , ease : "easeInOut"}}}
          className="fixed top-8 right-8 text-black dark:text-white z-[120]"
          onMouseDown={handleClose}
        >
          <AnimatedTooltip item={{id : 1, name : "Close"}}>
          <X className="xl:h-10 xl:w-10 h-6 w-6 text-white" />
          </AnimatedTooltip>
        </motion.button>
      )}
    </div>
  );
}
