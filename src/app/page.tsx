"use client";
import EarthGlobe from "./components/EarthGlobe";
import Navbar from "./components/Navbar";
import BasicLayout from "./layout/basiclayout";

export default function Home() {
  return (
    <>
      <BasicLayout>
        <EarthGlobe scene="https://prod.spline.design/E33gQaRqf1eBnuMv/scene.splinecode"></EarthGlobe>
        <div className="absolute top-0 left-0 w-full bg-fixed ">
          <Navbar></Navbar>
        </div>
        <div className="">
          {/* conntain the left side text */}
        </div>
      </BasicLayout>
    </>
  );
}
