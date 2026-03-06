"use client";
import Image from "next/image";
import Person from "../img/inivations/person.png";
import Link from "next/link";
import { useState } from "react";
import ModalContact from "./ModalContact";
import { motion } from "framer-motion";

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
      className="bg-[#233142] py-6 w-full flex items-center flex-col md:flex-row md:gap-8 lg:gap-16 overflow-hidden relative px-6 md:px-10 lg:px-20"
    >
      <Image
        src={Person}
        alt="Background person"
        width={696}
        height={865}
        className="w-[320px] md:w-[45%] lg:w-[50%] h-auto  object-cover relative "
      />

      <div className="flex flex-col justify-center md:w-[55%] lg:w-[50%] md:pr-6 lg:pr-20">
        <h2 className="text-white text-start text-[34px] md:text-[40px] lg:text-[70px] leading-tight">
          A New Era of{" "}
          <span className="text-blue-700 text-[28px] md:text-[32px] lg:text-[55px]">
            Innovation
          </span>
        </h2>

        <p className="text-[14px] md:text-[16px] lg:text-[20px] text-gray-300 mt-4">
          Always on the lookout for the hi-tech advancements. Build a product
          that will sell well
        </p>

        <div className="flex gap-5 items-start pt-9">
          <Link
            onClick={() => setOpen(true)}
            href="#innovation"
            className="w-36 h-12 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
          >
            Start Now
          </Link>

          <Link
            href="/"
            className="w-36 h-12 bg-transparent text-white border-2 border-blue-700 flex items-center justify-center hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
          <ModalContact isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </motion.section>
  );
}
