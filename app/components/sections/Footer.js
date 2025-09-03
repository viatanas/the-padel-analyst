import Link from "next/link";
import Arrow from "@/app/components/blocks/Arrow";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white/5  flex flex-col items-center pt-10 px-4 lg:px-0 lg:pt-20 lg:pb-80 pb-28 overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col md:flex-row md:justify-between items-center pb-12 border-b-2 border-white/5">
        <div className="flex w-full md:space-x-7 justify-around md:justify-start items-center">
          <Link
            href="/#how-it-works"
            className="font-barlow hidden md:flex font-bold text-sm uppercase text-white/80 tracking-[0.06em] hover:text-white"
          >
            How It Works
          </Link>
          <Link
            href="/#coaches"
            className="font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em] hover:text-white"
          >
            Coaches
          </Link>
          <Link
            href="/#clients"
            className="font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em] hover:text-white"
          >
            Clients
          </Link>
          <Link
            href="/#faq"
            className="font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em] hover:text-white"
          >
            FAQ
          </Link>
          <Link
            href="/privacy-policy"
            className="font-barlow font-bold text-sm uppercase text-white/80 tracking-[0.06em] hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex mt-10 lg:mt-0 flex-row justify-center w-full md:justify-end px-4 items-center">
          <Link
            href="https://buy.stripe.com/eVq3cvf0k9dn9WEglueQM00"
            className="flex space-x-1 md:w-auto items-center w-full md:h-8 h-10 px-3 rounded-xl justify-center lg:hover:bg-accent/90 bg-accent transition-transform duration-150 ease-out motion-safe:active:scale-[0.98]"
          >
            <span className="font-barlow font-bold text-sm uppercase text-primary tracking-[0.06em]">
              Book Session
            </span>
            <Arrow />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:translate-y-2 translate-y-1 w-full px-7 md:px-0 max-w-5xl">
        <img src="/img/footer-logo.png" className="w-full opacity-10"></img>
      </div>
    </footer>
  );
};

export default Footer;
