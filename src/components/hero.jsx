"use client";
import Link from "next/link";
import s from "../scss/hero.module.scss";
import ModalContact from "./ModalContact";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <motion.section
      layout
      className={`
        ${s.hero_section}
        w-full
        min-h-130 md:min-h-160 lg:h-200
        px-6 md:px-12 lg:pl-35
        flex flex-col justify-center
      `}
    >
      <div className="flex max-w-180 items-center gap-4 md:gap-5">
        <p
          className="
            text-[72px] md:text-[110px] lg:text-[140px]
            text-[rgba(255,255,255,0.13)]
            border-r-2 md:border-r-4 border-[#377dff]
            pr-3 md:pr-5
            leading-none
          "
        >
          01
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-[140%] md:leading-[160%] lg:leading-[180%]">
          The Unique Creative{" "}
          <span className="text-blue-700">Design Agency</span>
        </h1>
      </div>

      <p className="max-w-130 pt-6 md:pt-7 text-sm md:text-base text-gray-200">
        Always on the lookout for the hi-tech advancements. Build not only a
        product that can sell well, but a platform through which to deliver it.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-10 md:pt-14">
        <Link
          onClick={() => setOpen(true)}
          href="/"
          className="
            flex items-center justify-center
            px-6 h-11 md:h-12
            rounded-full
            bg-[#377dff]
            text-white
            hover:bg-[#2f6ae6]
            transition
          "
        >
          Start Now
        </Link>

        <Link
          href="#how_we_works"
          className="
            flex items-center justify-center
            px-6 h-11 md:h-12
            rounded-full
            border border-[#377dff]
            text-white
            hover:bg-[#377dff]/10
            transition
          "
        >
          Learn More
        </Link>
        <ModalContact isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </motion.section>
  );
}
