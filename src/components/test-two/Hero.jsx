"use client";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const mm = gsap.matchMedia();
      mm.add("(min-width:768px)", () => {
        ScrollTrigger.create({
          trigger: ".pin-section",
          start: "top top",
          end: "600%",
          scrub: 2,
          pin: true,
          animation: tl,
        });
        tl.fromTo(
          ".heading",
          {
            x: "-1450%",
          },
          {
            x: "0",
          }
        )
          .fromTo(
            ".card-one",
            {
              x: "-1450%",
              rotateZ: "-45deg",
              stagger: 0.2,
            },
            {
              x: "0",
              rotateZ: "0deg",
              stagger: 0.2,
            }
          )
          .fromTo(
            ".card-two",
            {
              x: "1450%",
              rotateZ: "45deg",
              stagger: 0.2,
            },
            {
              x: "0",
              rotateZ: "0deg",
              stagger: 0.2,
            },
            0.5
          );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="bg-black text-white flex justify-center items-center min-h-screen text-5xl max-md:py-5 text-center px-4">
        Scroll Down For Animation
      </div>
      <div className="min-h-screen bg-[#191423] flex justify-center items-center pin-section overflow-hidden mx-auto max-md:py-5">
        <div className="max-w-[1440px] mx-auto w-full overflow-hidden max-xl:container">
          <div className="max-w-[1143px] mx-auto w-full max-xl:container">
            <h2 className="text-white text-[46px] leading-[130%] font-semibold heading px-4 max-lg:text-4xl max-md:text-3xl max-lg:pl-16 max-md:pl-4 max-md:text-center">
              Opportunity Overview
            </h2>
            <div className="w-full pt-9 flex flex-col gap-4 max-md:pt-5">
              <div className="w-full flex items-center justify-between flex-row-reverse max-xl:px-4 max-xl:justify-center max-xl:gap-5 max-md:flex-wrap-reverse">
                <Image
                  width={273.75}
                  height={270}
                  className="w-1/4 max-w-[273.75px] max-xl:max-w-[230px] max-lg:max-w-36 card-one max-md:w-1/2"
                  src="/assets/images/test-two-img/opportunity-img-three.webp"
                  alt="img"
                />
                <Image
                  width={273.75}
                  height={270}
                  className="w-1/4 max-w-[273.75px] max-xl:max-w-[230px] max-lg:max-w-36 card-one max-md:w-1/2"
                  src="/assets/images/test-two-img/opportunity-img-four.webp"
                  alt="img"
                />
                <Image
                  width={273.75}
                  height={270}
                  className="w-1/4 max-w-[273.75px] max-xl:max-w-[230px] max-lg:max-w-36 card-one max-md:w-1/2"
                  src="/assets/images/test-two-img/opportunity-img-one.webp"
                  alt="img"
                />
                <Image
                  width={273.75}
                  height={270}
                  className="w-1/4 max-w-[273.75px] max-xl:max-w-[230px] max-lg:max-w-36 card-one max-md:w-1/2"
                  src="/assets/images/test-two-img/opportunity-img-two.webp"
                  alt="img"
                />
              </div>
              <div className="w-full flex items-center justify-between max-xl:px-4 max-xl:justify-center max-xl:gap-5 max-md:flex-wrap">
                <Image
                  width={273.75}
                  height={270}
                  className="w-1/4 max-w-[273.75px] max-xl:max-w-[230px] max-lg:max-w-36 card-two max-md:w-1/2"
                  src="/assets/images/test-two-img/opportunity-img-five.webp"
                  alt="img"
                />
                <Image
                  width={273.75}
                  height={270}
                  className="w-1/4 max-w-[273.75px] max-xl:max-w-[230px] max-lg:max-w-36 card-two max-md:w-1/2"
                  src="/assets/images/test-two-img/opportunity-img-six.webp"
                  alt="img"
                />
                <Image
                  width={273.75}
                  height={270}
                  className="w-1/4 max-w-[273.75px] max-xl:max-w-[230px] max-lg:max-w-36 card-two max-md:w-1/2"
                  src="/assets/images/test-two-img/opportunity-img-seven.webp"
                  alt="img"
                />
                <Image
                  width={273.75}
                  height={270}
                  className="w-1/4 max-w-[273.75px] max-xl:max-w-[230px] max-lg:max-w-36 card-two max-md:w-1/2"
                  src="/assets/images/test-two-img/opportunity-img-eight.webp"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
