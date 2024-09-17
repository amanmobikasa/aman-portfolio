'use client'
import React from 'react'
const ThreeDCardDemo = React.lazy(() => import('../common/3DCards'));
import { projectPopupJson } from '../json/project-popup-json';
import { FlipWordsDemo } from './heading-common';

function ProjectPopupWrapper() {
  const words = ["Project's", "प्रोजैक्ट", "プロジェクト", "проект", "प्रकल्प"];

  return (
    <>
    <div className='w-11/12 mx-auto relative h-fit mt-[1rem] md:mt-[2.5rem] xl:mt-[4rem]'>
    <div>
       <FlipWordsDemo  wordsArray={words}/>
    </div>
        <div className='w-full grid-cols-1 md:grid-cols-2 grid xl:grid-cols-3 gap-[2rem] xl:gap-x-[3rem] justify-evenly mb-[1.5rem] md:mb-[2.5rem] xl:mb-[4rem]'>
            {
                projectPopupJson?.length > 0 && projectPopupJson?.map((item, index)=>{
                    return <>
                     <ThreeDCardDemo data={item} index={index} />
                    </>
                })
            }
        </div>
    </div>
    </>
  )
}

export default ProjectPopupWrapper