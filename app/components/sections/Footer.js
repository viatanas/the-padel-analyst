import Link from "next/link";
import PrimaryButton from "@/app/components/blocks/PrimaryButton";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white/5  flex flex-col items-center pt-10 px-4 lg:px-0 lg:pt-20 lg:pb-80 pb-28 overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row lg:justify-between items-center pb-12 border-b-2 border-white/5">
        <div className="flex w-full lg:space-x-7 justify-evenly lg:justify-start items-center">
          <Link
            href="#how-it-works"
            className="font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em]"
          >
            How It Works
          </Link>
          <Link
            href="#coaches"
            className="font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em]"
          >
            Coaches
          </Link>
          <Link
            href="#clients"
            className="font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em]"
          >
            Clients
          </Link>
          <Link
            href="#faq"
            className="font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em]"
          >
            FAQ
          </Link>
        </div>
        <div className="flex mt-10 lg:mt-0 flex-row w-full lg:justify-end space-x-3 items-center">
          <PrimaryButton />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 lg:px-0 lg:translate-y-6 translate-y-1 w-full max-w-5xl">
        <img src="/img/footer-logo.png" className="w-full opacity-10"></img>
      </div>
    </footer>
  );
};

export default Footer;
