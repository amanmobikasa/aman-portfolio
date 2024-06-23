"use client";
import { useState } from "react";
import { MultiStepLoaderDemo } from "./common/pop-over";
import { AnimatedTooltipPreview } from "./common/toptip-common";
import { TypewriterEffectSmoothDemo } from "./components/CommonTypeWriter";
import EarthGlobe from "./components/EarthGlobe";
import Navbar from "./components/Navbar";
import BasicLayout from "./layout/basiclayout";
import { motion } from "framer-motion";

export default function Home() {

  const [showModal,setShowModal] = useState<boolean>(false);

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

  // for open menu on click
  const openMenuPopup = () => {
    setShowModal(true);
  }

  return (
    <>
    {showModal && 
        <MultiStepLoaderDemo children={<h1>This is a inner text that render under popup</h1>} onClose={(loading) => setShowModal(false)} onOpen={showModal} />
        }
      <BasicLayout>
        <EarthGlobe scene="https://prod.spline.design/E33gQaRqf1eBnuMv/scene.splinecode"></EarthGlobe>
        <div className="absolute top-0 left-0 w-full bg-fixed ">
          <Navbar onOpen={openMenuPopup}></Navbar>
        </div>
        <div className="">
          <TypewriterEffectSmoothDemo wordArray={words}/>
        </div>
      </BasicLayout>
    </>
  );
}
