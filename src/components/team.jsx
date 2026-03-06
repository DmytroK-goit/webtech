"use client";
import Link from "next/link";
import Gary from "../img/team/hary.png";
import James from "../img/team/james.png";
import Sharon from "../img/team/sharon.png";
import Facebook from "../img/team/facebook.png";
import Telegram from "../img/team/telegram.png";
import Linkedin from "../img/team/linkedin.png";
import Instagram from "../img/team/instagram.png";
import Youtube from "../img/team/youtube.png";
import { motion } from "framer-motion";

import Image from "next/image";
import { sectionAnimation } from "./howWorks";

export default function Team() {
  const team = [
    {
      name: "Gary D. Greenwell",
      role: "Head of SEO",
      photo: Gary,
      socials: {
        facebook: "https://facebook.com",
        telegram: "https://telegram.org",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
    {
      name: "Jems W. Phelps",
      role: "UI Designer",
      photo: James,
      socials: {
        facebook: "https://facebook.com",
        telegram: "https://telegram.org",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
    {
      name: "Sharon A. Melton",
      role: "Web Designer",
      photo: Sharon,
      socials: {
        facebook: "https://facebook.com",
        telegram: "https://telegram.org",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
  ];

  return (
    <motion.section
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="team"
      className="bg-white h-150 md:h-180 lg:h-200 flex items-center justify-center gap-4"
    >
      <div className="flex flex-col md:flex-col lg:items-center lg:justify-between gap-8 mb-12">
        <h2 className="text-[40px] max-w-47 text-[#141d28] border-l-2 border-blue-700 pl-7">
          <span className="text-[#377dff]">Our</span> Best Workers
        </h2>

        <Link
          href="/"
          className="w-40 mt-18 py-4 flex items-center justify-center border-2 border-[#377dff] text-[#141d28]"
        >
          View Team
        </Link>
      </div>

      <ul className="flex gap-4">
        {team.map((member) => (
          <li key={member.name} className="flex flex-col items-center">
            <div className="relative group overflow-hidden">
              <Image
                src={member.photo}
                alt={member.name}
                width={286}
                height={356}
              />

              <div className="absolute bottom-0 left-0 w-full bg-[#377dff]/90 flex gap-2 py-2 justify-center md:gap-4 md:py-3 translate-y-full group-hover:translate-y-0 transition duration-300">
                <Link href={member.socials.facebook}>
                  <Image
                    src={Facebook}
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-[10px] md:w-[20px]"
                  />
                </Link>
                <Link href={member.socials.telegram}>
                  <Image
                    src={Telegram}
                    alt="Telegram"
                    width={20}
                    height={20}
                    className="w-[10px] md:w-[20px]"
                  />
                </Link>
                <Link href={member.socials.linkedin}>
                  <Image
                    src={Linkedin}
                    alt="Linkedin"
                    width={20}
                    height={20}
                    className="w-[10px] md:w-[20px]"
                  />
                </Link>
                <Link href={member.socials.instagram}>
                  <Image
                    src={Instagram}
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-[10px] md:w-[20px]"
                  />
                </Link>
                <Link href={member.socials.youtube}>
                  <Image
                    src={Youtube}
                    alt="Youtube"
                    width={20}
                    height={20}
                    className="w-[10px] md:w-[20px]"
                  />
                </Link>
              </div>
            </div>

            <h3 className="text-center md:text-2xl text-[#141d28] pt-8">
              {member.name}
            </h3>
            <p className="text-center text-[14px] md:text-[16px] text-[#5c6f87] pt-2.5">
              {member.role}
            </p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
