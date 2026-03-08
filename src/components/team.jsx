'use client';
import Link from 'next/link';
import Gary from '../img/team/hary.png';
import James from '../img/team/james.png';
import Sharon from '../img/team/sharon.png';
import Facebook from '../img/team/facebook.png';
import Telegram from '../img/team/telegram.png';
import Linkedin from '../img/team/linkedin.png';
import Instagram from '../img/team/instagram.png';
import Youtube from '../img/team/youtube.png';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { sectionAnimation, stepAnimation } from './howWorks';

export default function Team() {
  const team = [
    {
      name: 'Gary D. Greenwell',
      role: 'Head of SEO',
      photo: Gary,
      socials: {
        facebook: 'https://facebook.com',
        telegram: 'https://telegram.org',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Jems W. Phelps',
      role: 'UI Designer',
      photo: James,
      socials: {
        facebook: 'https://facebook.com',
        telegram: 'https://telegram.org',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
      },
    },
    {
      name: 'Sharon A. Melton',
      role: 'Web Designer',
      photo: Sharon,
      socials: {
        facebook: 'https://facebook.com',
        telegram: 'https://telegram.org',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
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
      className="flex h-150 items-center justify-center gap-4 bg-white md:h-180 lg:h-200"
    >
      <div className="mb-12 flex flex-col gap-8 md:flex-col lg:items-center lg:justify-between">
        <h2 className="text-26px max-w-20 border-l-2 border-blue-700 pl-7 text-[#141d28] md:max-w-30 md:text-[30px] lg:max-w-47 lg:text-[40px]">
          <span className="text-[#377dff]">Our</span> Best Workers
        </h2>
        <motion.div variants={stepAnimation} whileHover={{ scale: 1.08, y: -5 }}>
          {' '}
          <Link
            title="In developing"
            href="/"
            className="mt-10 flex w-24 items-center justify-center border-2 border-[#377dff] py-2 text-[#141d28] md:mt-18 md:w-30 md:py-4 lg:w-40"
          >
            View Team
          </Link>
        </motion.div>
      </div>

      <ul className="flex gap-4">
        {team.map((member) => (
          <motion.li
            variants={stepAnimation}
            whileHover={{ scale: 1.08, y: -5 }}
            key={member.name}
            className="flex flex-col items-center"
          >
            <div className="group relative overflow-hidden">
              <Image src={member.photo} alt={member.name} width={286} height={356} />

              <div className="absolute bottom-0 left-0 flex w-full translate-y-full justify-center gap-2 bg-[#377dff]/90 py-2 transition duration-300 group-hover:translate-y-0 md:gap-4 md:py-3">
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

            <h3 className="pt-8 text-center text-[#141d28] md:text-2xl">{member.name}</h3>
            <p className="pt-2.5 text-center text-[14px] text-[#5c6f87] md:text-[16px]">
              {member.role}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
