"use client";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { MultiStepLoaderDemo } from "./common/pop-over";
// import { TypewriterEffectSmoothDemo } from "./components/CommonTypeWriter";
const TypewriterEffectSmoothDemo = dynamic(() => import("./components/CommonTypeWriter"), { ssr: false });
const EarthGlobe = dynamic(() => import("./components/EarthGlobe"), {
  ssr : false
});
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const BasicLayout = dynamic(() => import("./layout/basiclayout"), { ssr: false });
const SocialMediaComponent = dynamic(() => import("./components/ui/social-media-component"), { ssr: false });
import { socialMediaJson } from "./json/social-media-json";
const ButtonCommon = dynamic(() => import("./components/button-common"), {
  ssr : false
})
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { FolderGit2, SquareUserRound } from "lucide-react";
const MenuWrapper = dynamic(() => import("./components/menu-wrapper"), {
  ssr : false
})
const AboutMe = dynamic(()=> import('./components/about-me'), {ssr: false})
const ProjectPopupWrapper = dynamic(() => import("./components/project-popup-wrapper"), {ssr : false});

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [projectModal, setProjectModal] = useState<boolean>(false);
  const [aboutModal, setAboutModal] = useState<boolean>(false);

  const words = [
    {
      text: "Hi",
    },
    {
      text: "I'm",
    },
    {
      text: ["Aman", "अमन", "男", "阿曼"],
      className:
        "text-blue-600 dark:text-blue-500 animate-pulse text-[4rem] lg:text-[10rem]",
      anotherComponent: true,
    },
  ];

  // for open menu on click
  const openMenuPopup = () => {
    setShowModal(true);
  };

  const openProjectModal = () => {
    setShowModal(true);
    setProjectModal(true);
  };

  const openAboutModal = () => {
    setShowModal(true);
    setAboutModal(true);
  };

  return (
    <>
      {showModal && (
        <MultiStepLoaderDemo
          children={
            projectModal ? (
              <Suspense fallback={"loading..."}>
                <ProjectPopupWrapper />
              </Suspense>
            ) : aboutModal ? (
              <Suspense fallback={"loading..."}>
                <AboutMe />
              </Suspense>
            ) : (
              <MenuWrapper />
            )
          }
          onClose={(loading) => {
            setShowModal(false);
            setProjectModal(false);
            setAboutModal(false);
          }}
          onOpen={showModal}
        />
      )}
      <BasicLayout>
        <EarthGlobe scene="https://prod.spline.design/y82pVsz1U1fSdpvZ/scene.splinecode"></EarthGlobe>
        <div className="absolute top-0 left-0 w-full bg-fixed ">
          <Navbar onOpen={openMenuPopup}></Navbar>
        </div>
        <div className="">
          <React.Suspense fallback="Loading...">
            <TypewriterEffectSmoothDemo wordArray={words} />
          </React.Suspense>
        </div>
        <div className="absolute bottom-[2rem] right-0 left-0 mx-auto z-10 flex justify-between w-full lg:w-11/12  items-center">
          <div className="lg:w-4/12 w-4/12 mx-auto">
            <AnimatedTooltip item={{ id: 1, name: "About Me" }}>
              <ButtonCommon
                onClick={openAboutModal}
                className="w-full"
                iconJsx={<SquareUserRound className="h-5 w-5" />}
              >
                About Me
              </ButtonCommon>
            </AnimatedTooltip>
          </div>
          <div className="">
            <SocialMediaComponent socialMediaData={socialMediaJson} />
          </div>
          <div className="w-4/12 mx-auto flex justify-end">
            <AnimatedTooltip item={{ id: 1, name: "Projects" }}>
              <ButtonCommon
                onClick={openProjectModal}
                className="w-full"
                iconJsx={<FolderGit2 className="h-5 w-5" />}
              >
                Projects
              </ButtonCommon>
            </AnimatedTooltip>
          </div>
          <div></div>
        </div>
      </BasicLayout>
    </>
  );
}
