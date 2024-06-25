"use client"
import React from 'react'
type BasicLayoutProps = {
    children ?: React.ReactNode | React.ReactNode[]
}

function BasicLayout({children} : BasicLayoutProps) {
  return (
    <>
        <section className='w-full relative'>
            <div>
                <div>
                    {children}
                </div>
            </div>
        </section>
    </>
  )
}

export default BasicLayout