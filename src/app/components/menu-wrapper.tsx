import React, { useState } from "react";
import { FlipWordsDemo } from "./heading-common";
import { SparklesPreview } from "../common/heading-sparkle";
import { TextRevealCardPreview } from "../common/text-reveal";
import { MoveRight } from "lucide-react";
import { NavbarJson } from "../json/navbar-json";
import SkillSets from "./skill-set";
import { SignupFormDemo } from "./contact-us-form";
import PortfolioPage from "./portfolio-page";

function MenuWrapper() {
  const [renderElem, setRenderElem] = useState("")
  const wordsArray = [
    "Navigation",
    "नेविगेशन",
    "навигация",
    "ナビゲーション",
    "导航",
    "स्थान-निर्वहण-उपग्रहः",
  ];

  const handleClickNavigation = (e: React.MouseEvent<HTMLDivElement>, elem:any) => {
    setRenderElem(elem);
  } 
  return (
    <>
      <div className="w-11/12 mx-auto relative h-fit my-[2rem]">
        {renderElem == "Skill Set" ? <SkillSets /> : renderElem == "Contact" ? <SignupFormDemo /> : renderElem == "Portfolio" ? <PortfolioPage/> : <div className="w-full h-fit" >
          <SparklesPreview>
            <FlipWordsDemo wordsArray={wordsArray} />
          </SparklesPreview>
          <div className="mt-[2rem] mb-[3rem] text-left ">
            <ul className="flex items-center justify-center flex-col gap-x-[1rem]">
              {NavbarJson.length > 0 &&
                NavbarJson?.map((nav: any, index: number) => {
                  return (
                    <>
                      <li key={index} className="flex items-center justify-center xl:w-6/12 w-full mx-auto gap-x-3 md:gap-x-4 lg:gap-x-5">
                        <div>
                          <MoveRight className="xl:h-16 xl:w-16 h-8 w-8 md:h-12 md:w-12  animate-bounce-custom" />
                        </div>
                        <div>
                        <TextRevealCardPreview
                          onHandleClick={handleClickNavigation}
                          innerRevealText={nav?.text}
                          innerText={nav?.innerRevealText}
                          link = {nav?.link}
                        ></TextRevealCardPreview>
                        </div>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div> }
      </div>
    </>
  );
}

export default MenuWrapper;
