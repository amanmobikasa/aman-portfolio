"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards"
import reactimg from '../../../public/assets/images/reactjs-image.png'
import nextjsimg from  '../../../public/assets/images/nextjs-image.png';
import typescriptimg from '../../../public/assets/images/typescript-image.png'
import javascriptimg from '../../../public/assets/images/javascript-image.png'
import tailwindcssimg from '../../../public/assets/images/tailwindcss-image.png'
import reduximg from '../../../public/assets/images/redux-image.png';
import adaimage from '../../../public/assets/images/ada-image.png'
import githubimg from '../../../public/assets/images/github-image.png'



export const InfiniteMovingCardsDemo = React.memo(() => {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative ">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}) 

const testimonials = [
  {
    quote:
      "React.Js",
    name: "React.js is a famous JavaScript Library",
    image: reactimg,
  },
  {
    quote:
      "Next.js",
    name: "Next.js is a famous JavaScript Framework",
    image: nextjsimg,
  },
  {
    quote: "TypeScript",
    name: "TypeScript is a Famous JavaScript Language used for Datatype Handling.",
    image: typescriptimg,
  },
  {
    quote:
      "JavaScript",
    name: "JavaScript is a famous Programming Language used for Web Development.",
    image: javascriptimg,
  },
  {
    quote:
      "Tailwind CSS",
    name: "Tailwind CSS is a famous CSS Framework used for Web Development.",
    image: tailwindcssimg,
  },
  {
    quote:
      "Accessibility",
    name: "Accessibility is a fundamental part of Web Development.",
    image: adaimage,
  },
  {
    quote:
      "Redux ToolKit",
    name: "Redux ToolKit is a famous Redux Library used for State Management.",
    image: reduximg,
  },
  {
    quote:
      "Github",
    name: "Github is a famous Source Control System used for Web Development.",
    image: githubimg,
  },  

];
