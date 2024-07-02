import React, { useState } from "react";
import { FlipWordsDemo } from "./heading-common";
import { SparklesPreview } from "../common/heading-sparkle";
import { TextRevealCardPreview } from "../common/text-reveal";
import { MoveRight } from "lucide-react";
import { NavbarJson } from "../json/navbar-json";
import SkillSets from "./skill-set";

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
    console.log(elem, "elem");
    setRenderElem(elem);
  } 
  return (
    <>
      <div className="w-11/12 mx-auto relative h-fit my-[2rem]">
        {renderElem == "Skill Set" ? <SkillSets /> : renderElem == "Contact" ? <h1>render the contact page</h1> : renderElem == "Portfolio" ? <h1>Render the portfolio heading</h1> : <div className="w-full h-fit" >
          <SparklesPreview>
            <FlipWordsDemo wordsArray={wordsArray} />
          </SparklesPreview>
          <div className="mt-[2rem] mb-[3rem] text-left ">
            <ul className="flex items-center justify-center flex-col gap-x-[1rem]">
              {NavbarJson.length > 0 &&
                NavbarJson?.map((nav: any, index: number) => {
                  return (
                    <>
                      <li key={index} className="flex items-center justify-center w-6/12 mx-auto">
                        <div>
                          <MoveRight className="h-10 w-10" />
                        </div>
                        <TextRevealCardPreview
                          onHandleClick={handleClickNavigation}
                          innerRevealText={nav?.text}
                          innerText={nav?.innerRevealText}
                          link = {nav?.link}
                        ></TextRevealCardPreview>
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
