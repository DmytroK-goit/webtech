import Image from "next/image";
import Logo from "../img/header/logo.png";
import Link from "next/link";
export default function Header() {
  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center gap-4">
        <Image src={Logo} alt="WebTech logo" width={51} height={30} />

        <Link
          href="/"
          className="text-[30px] font-semibold text-[#377dff] font-mono"
        >
          WebTech
        </Link>
      </div>
      Header
    </header>
  );
}
