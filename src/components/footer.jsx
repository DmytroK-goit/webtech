import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#141d26] text-gray-400 py-16 font-sans flex flex-col min-h-105"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 flex-1">
        <div>
          <h3 className="text-blue-500 uppercase tracking-widest text-sm font-bold mb-6">
            About Us
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            We are a modern digital company focused on building high-quality web
            solutions and user-friendly interfaces. Our team combines design,
            technology, and innovation to help businesses grow online and
            deliver outstanding customer experiences.
          </p>
          <div className="flex space-x-4 text-white">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaTelegramPlane className="cursor-pointer hover:text-blue-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-blue-500" />
            <FaYoutube className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        <div>
          <h3 className="text-blue-500 uppercase tracking-widest text-sm font-bold mb-6">
            Recent Post
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="border-b border-gray-700 pb-2 flex items-start gap-2">
              <span className="text-blue-500 mt-1">›</span>
              <a href="#" className="hover:text-white transition">
                Motion Animation And VR Headset
              </a>
            </li>
            <li className="border-b border-gray-700 pb-2 flex items-start gap-2">
              <span className="text-blue-500 mt-1">›</span>
              <a href="#" className="hover:text-white transition">
                Awesome Tips to Become CEO Of Big Network Startup
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">›</span>
              <a href="#" className="hover:text-white transition">
                Top 5 Changes For The Social Media Industry
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-500 uppercase tracking-widest text-sm font-bold mb-6">
            Contact Us
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-blue-500 text-xl shrink-0" />
              <div>
                <p className="font-bold text-white">Address:</p>
                <p>53 Hilltop Drive, TX 79022</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdPhone className="text-blue-500 text-xl shrink-0" />
              <div>
                <p className="font-bold text-white">Phone:</p>
                <p>806-377-1600</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdEmail className="text-blue-500 text-xl shrink-0" />
              <div>
                <p className="font-bold text-white">Mail:</p>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1e2936] pt-6 text-center mt-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          © {new Date().getFullYear()} Wertech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
