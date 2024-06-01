"use client"
import EarthGlobe from "./components/EarthGlobe";

export default function Home() {
  return <>
   <section>
    <div>
      <div>
          <EarthGlobe scene="https://prod.spline.design/E33gQaRqf1eBnuMv/scene.splinecode">
          </EarthGlobe>
              {/* <h1 className="text-red-600 text-[7rem] z-10 absolute left-0 right-0 mx-0">We made it</h1> */}
      </div>
    </div>
   </section>
  </>
}
