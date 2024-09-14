import React from "react";
import { motion } from "framer-motion";
import { Icon } from "lucide-react";

interface ButtonCommon {
  children: React.ReactNode | React.ReactNode[];
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  onHover?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  innerText?: string;
  iconJsx ?: React.ReactNode | React.ReactNode[],
}

function ButtonCommon({
  children,
  type,
  onClick,
  onMouseDown,
  disabled,
  onHover,
  innerText,
  className,
  iconJsx
 
}: ButtonCommon) {
  return (
    <>
      <motion.button
        type={type ?? "button"}
        onClick={onClick}
        onMouseDown={onMouseDown}
        disabled={disabled}
        className={`lg:py-3 py-2 w-full px-4 lg:px-8 z-10  bg-transparent text-white text-xs lg:text-sm font-ubuntu font-[500] border-white border-[0.01rem] hover:text-blue-800  hover:border-blue-800 transition-colors hover:animate-pulse hover:border-dashed hover:shadow-lg shadow-blue-800 duration-500 delay-150 ease-in-out flex justify-center items-center gap-x-2 lg:gap-x-3 ` + className}
      >
        {innerText ?? children}
        <span>
            {iconJsx}
        </span>
      </motion.button>
    </>
  );
}

export default ButtonCommon;
