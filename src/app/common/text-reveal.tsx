"use client";
import React from "react";
import { TextRevealCard } from "../components/ui/text-reveal-card";

interface TextRevealCardPreviewProps {
  innerText: string;
  innerRevealText: string;
  link: string;
  onHandleClick : (e: React.MouseEvent<HTMLDivElement>, elem : any) => void;
}

export function TextRevealCardPreview({
  innerText,
  innerRevealText,
  link,
  onHandleClick
}: TextRevealCardPreviewProps) {
  return (
    <div className="flex items-center justify-center h-fit rounded-2xl w-full">
      <div onMouseDown={(e)=> onHandleClick(e, innerRevealText)}>
        <TextRevealCard
          text={innerText ?? "You know the business"}
          revealText={innerRevealText ?? "I know the chemistry"}
          className=""
        ></TextRevealCard>
      </div>
    </div>
  );
}
