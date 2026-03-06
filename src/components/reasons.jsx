"use client";
import { motion } from "framer-motion";
import s from "../scss/reasons.module.scss";
import { sectionAnimation } from "./howWorks";
export default function Reasons() {
  return (
    <motion.section
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="why_us"
      className={`${s.reasons_section} w-full py-16 px-6 md:px-12 lg:px-20`}
    >
      <div className="flex flex-col w-[100%] md:w-1/3 border-l-2 border-l-blue-600 pl-3 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black">
          Few Reasons
        </h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-800">
          Why Choose Us
        </h2>
      </div>
      <div className="pt-10 md:pt-30 flex flex-col gap-6 max-w-1/2 md:max-w-1/3">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-blue-600">.01</h3>
          <p className="text-xl font-semibold mt-4 text-[#233142]">Clients</p>
          <p className="mt-3 text-[12px] md:text-[16px] text-gray-600 leading-relaxed">
            We build strong, long-term partnerships with our clients by
            understanding their goals and delivering tailored digital solutions
            that drive real business growth and brand recognition.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-blue-600">.02</h3>
          <p className="text-xl font-semibold mt-4  text-[#233142]">Projects</p>
          <p className="mt-3 text-[12px] md:text-[16px] text-gray-600 leading-relaxed">
            Every project we create is focused on usability, performance, and
            modern design. From concept to launch, we ensure each product meets
            high quality standards and user expectations.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold text-blue-600">.03</h3>
          <p className="text-xl font-semibold mt-4  text-[#233142]">
            Reporting & Analysis
          </p>
          <p className="mt-3 text-[12px] md:text-[16px] text-gray-600 leading-relaxed">
            We continuously analyze results and user behavior to optimize
            performance. Clear reporting and data-driven insights help improve
            strategies and maximize return on investment.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
