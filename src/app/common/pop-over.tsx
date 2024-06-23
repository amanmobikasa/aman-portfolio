"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { X } from "lucide-react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
// import { IconSquareRoundedX } from "@tabler/icons-react";
import { motion } from "framer-motion";

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

interface MultiStepLoaderDemo {
    children : React.ReactNode | React.ReactNode[]
    onClose : (loading : boolean) => void;
    onOpen : boolean;
}


export function MultiStepLoaderDemo({children, onClose, onOpen} : MultiStepLoaderDemo) {
  const [loading, setLoading] = useState(()=> onOpen ? onOpen : false);

//   const handleOpen = () => {
//     setLoading(true); 
//   };

  const handleClose = () => {
    setLoading(false);
    onClose(false);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-gradient-to-l from-[#0f172a] absolute top-0 left-0 z-[100] text-white">
      {children}
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
          <X className="h-10 w-10 text-white" />
          </AnimatedTooltip>
        </motion.button>
      )}
    </div>
  );
}
