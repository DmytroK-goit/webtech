import Image from "next/image";
import Logo from "../img/header/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0c1117] w-full py-5 px-32">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="WebTech logo" width={51} height={30} />
          <Link
            href="/"
            className="text-[30px] font-semibold text-[#377dff] font-mono"
          >
            WebTech
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link href="/">Home</Link>
          <Link href="/">Pages</Link>
          <Link href="/">Services</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
