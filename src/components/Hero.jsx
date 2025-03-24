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
        });
        tl.fromTo(
          ".my-card",
          {
            x: "150%",
          },
          {
            x: "-150%",
          }
        );
      });
      mm.add("(min-width:1023px) and (max-width:1280px)", () => {
        gsap.set(".card-one", {
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        });
        ScrollTrigger.create({
          trigger: ".pin-section",
          start: "top , top",
          end: "900% center",
          scrub: 3,
          pin: true,
          animation: tl,
        });
        tl.fromTo(
          ".card-two",
          {
            bottom: "-100%",
          },
          {
            bottom: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "50%",
          }
        )
          .fromTo(
            ".card-three",
            {
              bottom: "-100%",
            },
            {
              bottom: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "50%",
            }
          )
          .fromTo(
            ".card-four",
            {
              bottom: "-100%",
            },
            {
              bottom: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "50%",
            }
          );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center gap-10 max-xl:pt-14 max-xl:pb-16 pin-section overflow-hidden px-4 max-w-[1920px] mx-auto max-xl:flex-col relative max-xl:max-w-[1000px]">
        <CardOne className="min-w-[1140px] my-card mx-auto container items-center max-xl:min-w-0 card-one max-xl:absolute max-xl:z-[1] max-lg:sticky" />
        <CardTwo className="min-w-[1140px] my-card mx-auto container items-center max-xl:min-w-0 card-two max-xl:absolute max-xl:z-[2] max-lg:sticky" />
        <CardThree className="min-w-[1140px] my-card mx-auto container items-center max-xl:min-w-0 card-three max-xl:absolute max-xl:z-[3] max-lg:sticky" />
        <CardFour className="min-w-[1140px] my-card mx-auto container items-center max-xl:min-w-0 card-four max-xl:absolute max-xl:z-[4] max-lg:sticky" />
      </div>
    </div>
  );
};

export default Hero;
