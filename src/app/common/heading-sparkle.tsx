"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

interface SparklesPreviewProps {
    children: React.ReactNode | React.ReactNode[];
}

export function SparklesPreview({children} : SparklesPreviewProps) {
  return (
    <div className="xl:h-[10rem] h-[2rem] origin-center w-full bg-transparent  flex flex-col items-center justify-center mt-[6rem] rounded-md">
        <div className="xl:mb-[2rem] mb-3 md:mb-4 lg:mb-6">
      {children}
        </div>
      <div className="xl:w-6/12 w-full mx-auto xl:h-20 h-10 relative">
        {/* Gradients */}
        <div className="absolute sm:inset-x-20 inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent xl:h-[5px] h-[3px] w-2/4 blur-sm " />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
