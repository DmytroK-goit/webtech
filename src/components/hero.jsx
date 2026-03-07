'use client';
import Link from 'next/link';
import s from '../scss/hero.module.scss';
import ModalContact from './ModalContact';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <motion.section
      layout
      className={` ${s.hero_section} flex min-h-130 w-full flex-col justify-center px-6 md:min-h-160 md:px-12 lg:h-200 lg:pl-35`}
    >
      <div className="flex max-w-180 items-center gap-4 md:gap-5">
        <p className="border-r-2 border-[#377dff] pr-3 text-[72px] leading-none text-[rgba(255,255,255,0.13)] md:border-r-4 md:pr-5 md:text-[110px] lg:text-[140px]">
          01
        </p>

        <h1 className="text-3xl leading-[140%] text-white md:text-4xl md:leading-[160%] lg:text-5xl lg:leading-[180%]">
          The Unique Creative <span className="text-blue-700">Design Agency</span>
        </h1>
      </div>

      <p className="max-w-130 pt-6 text-sm text-gray-200 md:pt-7 md:text-base">
        Always on the lookout for the hi-tech advancements. Build not only a product that can sell
        well, but a platform through which to deliver it.
      </p>
      <div className="flex flex-col gap-4 pt-10 sm:flex-row md:pt-14">
        <Link
          onClick={() => setOpen(true)}
          href="/"
          className="flex h-11 max-w-[30%] items-center justify-center rounded-full bg-[#377dff] px-6 text-white transition hover:bg-[#2f6ae6] md:h-12"
        >
          Start Now
        </Link>

        <Link
          href="#how_we_works"
          className="flex h-11 max-w-[30%] items-center justify-center rounded-full border border-[#377dff] px-6 text-white transition hover:bg-[#377dff]/10 md:h-12"
        >
          Learn More
        </Link>
        <ModalContact isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </motion.section>
  );
}
