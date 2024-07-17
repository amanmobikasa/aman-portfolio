import React from 'react'
import { SparklesPreview } from '../common/heading-sparkle'
import { FlipWordsDemo } from './heading-common'
import { DirectionAwareHoverDemo } from '../common/skills-cards'
import { InfiniteMovingCardsDemo } from './marquee-list'

function SkillSets() {
    const wordsArray = ["Skill Sets", 'कौशल सेट', "वैशारद्यम्", "スキルセット or スキル一式", "技能" ]
  return (
    <>
    <div className='w-full h-fit relative'>
        <div className=''>   
        <SparklesPreview>
            <FlipWordsDemo wordsArray={wordsArray} />
          </SparklesPreview>
        </div>
        <section className='flex flex-wrap gap-[2rem] justify-evenly w-full mt-[3rem]'>
            <div>
                <InfiniteMovingCardsDemo />
            </div>
        </section>
    </div>
    </>
  )
}

export default SkillSets