"use client";
import { TypewriterEffectSmoothDemo } from "./components/CommonTypeWriter";
import EarthGlobe from "./components/EarthGlobe";
import Navbar from "./components/Navbar";
import BasicLayout from "./layout/basiclayout";
import { motion } from "framer-motion";

export default function Home() {

  const words = [
    {
      text: "Hi",
    },
    {
      text: "I'm",
    },
    {
      text: "Aman",
      className: "text-blue-500 dark:text-blue-500 animate-pulse ",

    },
  ];

  return (
    <>
      <BasicLayout>
        <EarthGlobe scene="https://prod.spline.design/E33gQaRqf1eBnuMv/scene.splinecode"></EarthGlobe>
        <div className="absolute top-0 left-0 w-full bg-fixed ">
          <Navbar></Navbar>
        </div>
        {/* <div className="absolute left-[3rem] top-0 bottom-0 my-auto w-3/12 h-[100%]  bg-transparent">
            <div className="p-3 text-balance flex flex-col w-full h-full justify-center">
                <motion.h2 initial={{opacity : 0, x : -100}} animate={{opacity : 1, x : 0}} transition={{duration : 2, delay : 1.4, ease : "easeInOut", type : "spring", stiffness : 800, damping : 10, }} whileHover={{scale : 1.1, transition : {delay : 0 ,duration : 0.5,  ease : "easeInOut"}}}  className="text-white text-[9rem] leading-tight font-ubuntu font-[600]">Hi, I'm Aman</motion.h2>
            </div>
        </div> */}
        <div className="">
          <TypewriterEffectSmoothDemo wordArray={words}/>
        </div>
      </BasicLayout>
    </>
  );
}
