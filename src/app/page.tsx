"use client";
import { useState } from "react";
import { MultiStepLoaderDemo } from "./common/pop-over";
// import { AnimatedTooltipPreview } from "./common/toptip-common";
import { TypewriterEffectSmoothDemo } from "./components/CommonTypeWriter";
import EarthGlobe from "./components/EarthGlobe";
import Navbar from "./components/Navbar";
import BasicLayout from "./layout/basiclayout";
import { motion } from "framer-motion";
import SocialMediaComponent from "./components/ui/social-media-component";
import { socialMediaJson } from "./json/social-media-json";
import ButtonCommon from "./components/button-common";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { FolderGit2, SquareUserRound, UserRound } from "lucide-react";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [projectModal, setProjectModal] = useState<boolean>(false)
  const [aboutModal, setAboutModal] = useState<boolean>(false)

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
  };

  const openProjectModal = () => {
    setShowModal(true)
    setProjectModal(true)
  }

  const openAboutModal = () => {
    setShowModal(true)
    setAboutModal(true)
  }

  return (
    <>
      {showModal && (
        <MultiStepLoaderDemo
          children={projectModal ? <h1>Render the project modal here</h1> : aboutModal ? <h1>Render the about modal here</h1> : <h1>This is a inner text that render under popup</h1>}
          onClose={(loading) => {setShowModal(false); setProjectModal(false); setAboutModal(false)}}
          onOpen={showModal}
        />
      )}
      <BasicLayout>
        <EarthGlobe scene="https://prod.spline.design/E33gQaRqf1eBnuMv/scene.splinecode"></EarthGlobe>
        <div className="absolute top-0 left-0 w-full bg-fixed ">
          <Navbar onOpen={openMenuPopup}></Navbar>
        </div>
        <div className="">
          <TypewriterEffectSmoothDemo wordArray={words} />
        </div>
        <div className="absolute bottom-[2rem] right-0 left-0 mx-auto z-10 flex justify-between  w-11/12  items-center">
          <div className="w-4/12 mx-auto">
          <AnimatedTooltip item={{ id: 1, name: "About Me" }}>
            <ButtonCommon onClick={openAboutModal} className="w-full" iconJsx={<SquareUserRound  className="h-5 w-5" />}>About Me</ButtonCommon>
          </AnimatedTooltip>
          </div>
          <SocialMediaComponent socialMediaData={socialMediaJson} />
          <div className="w-4/12 mx-auto flex justify-end">
          <AnimatedTooltip item={{ id: 1, name: "Projects" }}>
            <ButtonCommon onClick={openProjectModal} className="w-full" iconJsx={<FolderGit2 className="h-5 w-5" />}>Projects</ButtonCommon>
          </AnimatedTooltip>
          </div>
          
        </div>
      </BasicLayout>
    </>
  );
}
