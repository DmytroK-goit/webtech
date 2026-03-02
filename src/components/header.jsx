"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../img/header/logo.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0c1117]/90 backdrop-blur border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-32">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="WebTech logo" width={42} height={26} />
          <Link
            href="/"
            className="text-2xl md:text-[28px] lg:text-[30px] font-semibold text-[#377dff] font-mono"
          >
            WebTech
          </Link>
        </div>

        <nav className="hidden lg:flex gap-8 text-white font-medium">
          <Link href="/" className="hover:text-[#377dff] transition">
            Home
          </Link>
          <Link
            href="#how_we_works"
            className="hover:text-[#377dff] transition"
          >
            How we works
          </Link>
          <Link href="#team" className="hover:text-[#377dff] transition">
            Team
          </Link>
          <Link href="#why_us" className="hover:text-[#377dff] transition">
            Why Us
          </Link>
          <Link href="#news" className="hover:text-[#377dff] transition">
            News
          </Link>
          <Link href="#footer" className="hover:text-[#377dff] transition">
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0c1117] border-t border-white/5">
          <nav className="flex flex-col gap-4 px-6 py-6 text-white font-medium">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#how_we_works" onClick={() => setOpen(false)}>
              How we works
            </Link>
            <Link href="#team" onClick={() => setOpen(false)}>
              Team
            </Link>
            <Link href="#why_us" onClick={() => setOpen(false)}>
              Why Us
            </Link>
            <Link href="#news" onClick={() => setOpen(false)}>
              News
            </Link>
            <Link href="#footer" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
