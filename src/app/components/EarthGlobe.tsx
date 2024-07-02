'use client'
import React from 'react'
import Spline from '@splinetool/react-spline'


type EarthGlobeProps = {
    scene : string,
    children ?: React.ReactNode | React.ReactNode[]
}

function EarthGlobe({scene, children} : EarthGlobeProps) {
  return (
    <div className='relative h-dvh w-full'>
    <Spline scene={scene ?? "https://prod.spline.design/E33gQaRqf1eBnuMv/scene.splinecode"} >
      {children}
    </Spline>
    </div>
          
 
  )
}

export default EarthGlobe