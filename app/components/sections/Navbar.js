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
        <nav className="w-full h-auto bg-primary p-10">
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
            <div className="flex flex-1">
              <img src="/img/logo-padel.png" className="w-[180px] pb-3" />
              {/* <Logo /> */}
            </div>
            <div className="flex items-center space-x-8 font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em]">
              <Link href="#how-it-works" className="hover:text-white">
                How It Works
              </Link>
              <Link href="#coaches" className="hover:text-white">
                Coaches
              </Link>
              <Link href="#clients" className="hover:text-white">
                Clients
              </Link>
              <Link href="#faq" className="hover:text-white">
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
