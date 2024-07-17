"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";


interface DirectionAwareHoverDemoProps {
    itemsObj: {
        quote : string;
        name : string;
        image : StaticImageData;
    }
}

export function DirectionAwareHoverDemo({itemsObj}: DirectionAwareHoverDemoProps) {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="size-[20rem] cursor-pointer relative  flex items-center justify-center">
      <DirectionAwareHover className="bg-transparent" imageUrl={itemsObj?.image}>
        <div className="pb-[1rem] space-y-2">
        <p className="font-bold text-xl">{itemsObj?.quote}</p>
        <p className="font-normal text-sm text-balance">{itemsObj?.name}</p>
        </div>
      </DirectionAwareHover>
    </div>
  );
}
