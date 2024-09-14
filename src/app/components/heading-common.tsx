import React from "react";
import { FlipWords } from "../components/ui/flip-words";


interface FlipWordsDemoProps {
    wordsArray : string[];
    // heading ?: string;
}

export function FlipWordsDemo({wordsArray, } : FlipWordsDemoProps) { 

  return (
    <div className="h-fit flex justify-start items-center text-left px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-200 ">
        {/* {heading} */}
        <FlipWords className="text-xl md:text-4xl xl:text-7xl  font-[600]" words={wordsArray} /> <br />
      </div>
    </div>
  );
}
    