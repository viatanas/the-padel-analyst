import Link from "next/link";

import Arrow from "@/app/components/blocks/Arrow";
import Logo from "@/app/components/blocks/Logo";
import PrimaryButton from "../blocks/PrimaryButton";

const Navbar = () => {
  return (
    <nav className="w-full h-auto bg-primary p-10">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex flex-1">
          <img src="/img/logo.png" className="w-[210px] pb-4" />
          {/* <Logo /> */}
        </div>
        <div className="flex items-center space-x-8 font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em]">
          <Link href="#how-it-works">How It Works</Link>
          <Link href="#coaches">Coaches</Link>
          <Link href="#clients">Clients</Link>
          <Link href="#faq">FAQ</Link>
        </div>
        <div className="flex flex-1 justify-end">
          <PrimaryButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
