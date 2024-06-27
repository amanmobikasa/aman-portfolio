"use client";
import React from "react";
import { TextRevealCard } from "../components/ui/text-reveal-card";
import Link from "next/link";

interface TextRevealCardPreviewProps {
  innerText: string;
  innerRevealText: string;
  link: string;
}

export function TextRevealCardPreview({
  innerText,
  innerRevealText,
  link,
}: TextRevealCardPreviewProps) {
  return (
    <div className="flex items-center justify-center h-fit rounded-2xl w-full">
      <Link href={link}>
        <TextRevealCard
          text={innerText ?? "You know the business"}
          revealText={innerRevealText ?? "I know the chemistry"}
          className=""
        ></TextRevealCard>
      </Link>
    </div>
  );
}
