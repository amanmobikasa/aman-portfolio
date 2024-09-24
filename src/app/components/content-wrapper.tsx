"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { CircleUser } from "lucide-react";


export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 ">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-xl w-fit px-6 py-2 mb-4 flex items-center gap-x-3 justify-center">
              {item.badge} <span>
                {index === 0 && <div className="h-[1.8rem] w-[1.8rem] rounded-full"><CircleUser className="h-7" /></div>}
              </span>
            </h2>

            <p className={twMerge("text-xl mb-4 font-ubuntu")}>
              {item.title}
            </p>
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Read More About Me",
    description: (
      <>
        <p>
        As a Frontend Developer with 1-3 years of experience, I specialize in crafting seamless, efficient, and responsive web applications. My expertise lies in React.js, where I have implemented complex UI/UX designs and ensured top-tier accessibility and performance. 
        </p>
        <p>
        My technical skills extend beyond React to include Next.js with TypeScript, Remix with Shopify Hydrogen for headless CMS architecture, and Prisma integration for scalable databases. Whether working on dynamic product listing pages or fine-tuning custom components, I’ve contributed to various projects that leverage modern technologies like Swiper for smooth interfaces.
        </p>
        <p>
        I am adept at ensuring responsive designs across different devices, focusing on user experience, performance, and web accessibility. I also integrate CI/CD workflows, security best practices, and analytics to optimize applications for real-world usage.
        </p>
      </>
    ),
    badge: "About ME",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
        Outside of coding, my passion lies in exploring new horizons—both literally and figuratively. I love traveling and hiking, with a deep appreciation for nature and the mountains. 
        </p>
        <p>
        Trekking through scenic trails or visiting holy places fuels my creative inspiration. These adventures offer fresh perspectives, much like solving complex technical problems. Whether I’m scaling a mountain or a new tech challenge, I’m driven by discovery and growth.
        </p>
      </>
    ),
    badge: "My Passion",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
