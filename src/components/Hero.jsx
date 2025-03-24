"use client";
import React, { useLayoutEffect } from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const mm = gsap.matchMedia();
      mm.add("(min-width:1280px)", () => {
        ScrollTrigger.create({
          trigger: ".pin-section",
          start: "top , top",
          end: "900% center",
          scrub: 2,
          pin: true,
          animation: tl,
          // markers: true,
        });
        tl.fromTo(
          ".my-card",
          {
            x: "150%",
            //   duration: 3,
          },
          {
            x: "-150%",
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center gap-10 pt-16 pb-20 pin-section overflow-hidden px-4 max-w-[1920px] mx-auto max-xl:flex-col max-xl:overflow-auto">
      <CardOne className="min-w-[1140px] my-card mx-auto container items-center max-xl:min-w-0" />
      <CardTwo className="min-w-[1140px] my-card mx-auto container items-center max-xl:min-w-0" />
      <CardThree className="min-w-[1140px] my-card mx-auto container items-center max-xl:min-w-0" />
      <CardFour className="min-w-[1140px] my-card mx-auto container items-center max-xl:min-w-0" />
    </div>
  );
};

export default Hero;
