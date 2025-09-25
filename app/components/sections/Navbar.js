"use client";

import Link from "next/link";

import Arrow from "@/app/components/blocks/Arrow";
import Logo from "@/app/components/blocks/Logo";
import PrimaryButton from "../blocks/PrimaryButton";
import MobileNav from "../blocks/MobileNavbar";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex md:hidden">
        <MobileNav />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex">
        <nav className="w-full h-auto fixed bg-primary/50 z-[999999] filter backdrop-blur py-5 px-10">
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
            <div className="flex flex-1">
              <Link href="/">
                <img src="/img/logo.png" className="w-[180px]" />
              </Link>
              {/* <Logo /> */}
            </div>
            <div className="flex items-center space-x-8 font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em]">
              <Link href="/#how-it-works" className="hover:text-white">
                How It Works
              </Link>
              <Link href="/#coaches" className="hover:text-white">
                Coaches
              </Link>
              <Link href="/#how-it-works" className="hover:text-white">
                How It Works
              </Link>
              <Link href="/#faq" className="hover:text-white">
                FAQ
              </Link>
            </div>
            <div className="flex flex-1 justify-end">
              <PrimaryButton />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
