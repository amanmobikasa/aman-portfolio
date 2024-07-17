'use client'
import React from 'react'
const ThreeDCardDemo = React.lazy(() => import('../common/3DCards'));
import { projectPopupJson } from '../json/project-popup-json';
import { FlipWordsDemo } from './heading-common';

function ProjectPopupWrapper() {
  const words = ["Project's", "प्रोजैक्ट", "プロジェクト", "проект", "प्रकल्प"];

  return (
    <>
    <div className='w-11/12 mx-auto relative h-fit mt-[4rem]'>
    <div>
       <FlipWordsDemo  wordsArray={words}/>
    </div>
        <div className='w-full grid grid-cols-3 gap-x-[3rem] justify-evenly mb-[4rem]'>
            {
                projectPopupJson?.length > 0 && projectPopupJson?.map((item, index)=>{
                    return <>
                    <div key={index}>
                     <ThreeDCardDemo data={item} />
                    </div>
                    </>
                })
            }
        </div>
    </div>
    </>
  )
}

export default ProjectPopupWrapper