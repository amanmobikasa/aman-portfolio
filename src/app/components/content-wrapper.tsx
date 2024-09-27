"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";



export function TracingBeamDemo() {
  const router = useRouter();


  return (
    <TracingBeam className="px-6 scroll-smooth">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-16">
            <button className="bg-black cursor-pointer text-white rounded-full text-xl w-fit px-6 py-2 mb-4 flex items-center gap-x-3 justify-center">
              {item.badge} <span>
                {index === 0 && <div className="h-[1.8rem] w-[1.8rem] rounded-full"><CircleUser className="h-7" /></div>}
              </span>
            </button>

            <p className={twMerge("text-xl mb-4 font-ubuntu")}>
              {item.title}
            </p>
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt={`${item?.title}-image`}
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                  loading="lazy"
                  quality={100}
                />
              )}
              <div id={item?.hashNavigation}>
              {item.description}
              </div>
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
      "/assets/images/my-image-1.jpg",
      hashNavigation : "about-me"
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
      "/assets/images/my-image-2.png",
      hashNavigation : "my-passion"

  },
];
