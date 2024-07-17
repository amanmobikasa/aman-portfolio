import React from "react";
import { SparklesPreview } from "../common/heading-sparkle";
import { FlipWordsDemo } from "./heading-common";
import { LayoutGridDemo } from "./layout-grid-portfolio";

function PortfolioPage() {
  const wordArray = [
    "Portfolio",
    "पोर्टफायल",
    "ポートフォリオ",
    "文件夹",
    "папка",
    "निवेशसूचिः",
  ];
  return (
    <>
      <div className="w-full h-full relative">
        <div className="inner-container">
          <div className="">
            <SparklesPreview>
              <FlipWordsDemo wordsArray={wordArray} />
            </SparklesPreview>
          </div>
          {/* for container of cards */}
          <div>
                <LayoutGridDemo/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
