"use client";
/* eslint-disable react/no-unescaped-entities */

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Ripple from "./ui/ripple";
import WordRotate from "./ui/WordRotate";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36">
        <div
          className="h-screen w-full dark:bg-black absolute top-0 left-0 flex items-center justify-center"
          style={{
            backgroundColor: "#d4c5b1",
            // backgroundColor: "#faefe0",
          }}
        ></div>

        <div className="flex justify-left relative mt-20 z-10">
          <div className="max-w-[89vw] md:mb-4 md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start  justify-left">
            <p className="uppercase tracking-widest text-xs text-left text-black-100 max-w-80"></p>

            {/* Wrapper div to align text and rotating words side by side */}
            <div className="text-left ml-3 md:mb-10 text-[30px] sm:mb-10 sm:text-4xl md:text-5xl lg:text-6xl flex items-center">
              <WordRotate
                className="font-bold text-blue-700 dark:text-blue-700 inline-block align-middle"
                words={[
                  "IT Solutions",
                  "Cloud Services",
                  "IT Infra",
                  "Network",
                  "Data Center Infra",
                  "Mailing Solutions",
                  "Security Solutions",
                ]}
              />
            </div>

            <p className="text-left md:tracking-wider md:mb-4 text-sm md:text-lg lg:text-2xl"></p>

            <Link
              className="flex justify-start ml-3 items-center"
              href="/system/contact"
            >
              <MagicButton
                title="CONTACT"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>

          <div className="relative z-100 flex justify-center my-20 ml-0 md:ml-20 lg:ml-40">
            <Ripple className="z-0" />

            {/* Red Circle Positioned in the Center of the Ripple */}
            <div
              className="absolute size-32 bg rounded-full"
              style={{
                left: "0%",
                top: "0%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#323232",
                zIndex: 1, // Ensure the red circle is on top of the ripple but below the text
              }}
            />

            <a
              href="#contact" // Adjust this href to link to your desired section
              className="absolute text-md font-medium tracking-tighter size-md text-white transition-transform transform hover:scale-105"
              style={{
                left: "0%",
                top: "0%",
                transform: "translate(-50%, -50%)",
                zIndex: 2, // Ensure the text is on top of the red circle
              }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
