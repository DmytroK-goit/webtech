'use client';
import Image from 'next/image';
import Person from '../img/inivations/person.png';
import Link from 'next/link';
import { useState } from 'react';
import ModalContact from './ModalContact';
import { motion } from 'framer-motion';

export default function Innovation() {
  const [open, setOpen] = useState(false);
  const sectionAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <motion.section
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="innovation"
      className="relative flex w-full flex-col items-center overflow-hidden bg-[#233142] px-6 py-6 md:flex-row md:gap-8 md:px-10 lg:gap-16 lg:px-20"
    >
      <motion.div
        initial={{
          rotateX: 75,
          y: 120,
          opacity: 0,
        }}
        whileInView={{
          rotateX: 0,
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
          ease: 'easeOut',
        }}
        style={{ perspective: 1200 }}
        className="relative flex justify-center"
      >
        <Image
          src={Person}
          alt="person"
          width={696}
          height={865}
          className="h-auto w-[320px] object-cover md:w-[80%] lg:w-[90%]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="absolute bottom-0 h-6 w-48 rounded-full bg-black blur-xl"
        />
      </motion.div>

      <div className="flex flex-col justify-center md:w-[55%] md:pr-6 lg:w-[50%] lg:pr-20">
        <h2 className="text-start text-[34px] leading-tight text-white md:text-[40px] lg:text-[70px]">
          A New Era of{' '}
          <span className="text-[28px] text-blue-700 md:text-[32px] lg:text-[55px]">
            Innovation
          </span>
        </h2>

        <p className="mt-4 text-[14px] text-gray-300 md:text-[16px] lg:text-[20px]">
          Always on the lookout for the hi-tech advancements. Build a product that will sell well
        </p>

        <div className="flex items-start gap-5 pt-9">
          <Link
            onClick={() => setOpen(true)}
            href="#innovation"
            className="flex h-12 w-36 items-center justify-center bg-blue-600 text-white transition hover:bg-blue-700"
          >
            Start Now
          </Link>

          <Link
            href="/"
            className="flex h-12 w-36 items-center justify-center border-2 border-blue-700 bg-transparent text-white transition hover:bg-blue-700"
          >
            Learn More
          </Link>
          <ModalContact isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </motion.section>
  );
}
