import Link from "next/link";
import { CaretUpIcon, PlayIcon } from "@phosphor-icons/react/dist/ssr";

import PrimaryButton from "@/app/components/blocks/PrimaryButton";

const Header = () => {
  return (
    <header className="w-full h-auto px-7 md:px-0 py-10 md:pb-24 md:pt-48 flex mt-20 lg:mt-0 justify-center items-center bg-primary">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[610px] w-full flex flex-col items-center">
          <div className="flex space-x-3 items-center">
            <div className="w-[10px] h-[10px] rounded bg-accent animate-pulse"></div>
            <span className="font-barlow font-bold text-sm uppercase text-white/60 tracking-[0.06em]">
              Limited Slots Available
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 hidden md:block font-gelica text-5xl font-normal text-center leading-[130%] tracking-[-0.04em] text-white max-w-4xl">
            <span className="block">Send Your Padel Footage.</span>
            <span className="block">Get Pro Feedback. Level Up.</span>
          </h1>

          <h1 className="mt-6 md:hidden font-gelica text-[36px] font-normal text-center leading-[120%] tracking-[-0.04em] text-white max-w-4xl">
            Send Your Padel Footage. Get Pro Feedback. Level Up.
          </h1>

          {/* Paragraph */}
          <p className="mt-4 md:mt-6 font-geist font-medium text-center text-base md:text-lg text-white/80 leading-relaxed">
            {` Send us your match footage and we’ll deliver a personalised video
            review, packed with clear insights, targeted fixes, and drills to
            help you sharpen your padel game. Your Playtomic rating will thank
            you.`}
          </p>

          {/* Buttons */}
          <div className="mt-8 md:mt-6 flex space-x-2">
            <PrimaryButton />
            <Link
              href="#how-it-works"
              className="flex space-x-1 items-center h-8 px-3 rounded-xl bg-white/20 hover:bg-white/25 transition-transform duration-150 ease-out motion-safe:active:scale-[0.98]"
            >
              <span className="font-barlow font-bold text-sm uppercase text-white tracking-[0.06em]">
                How It Works
              </span>
            </Link>
          </div>
        </div>

        {/* Video */}
        <div className="mt-16 w-full items-center max-w-[918px]">
          <div className="relative">
            {/* Thumbnail */}
            {/* <video
              src="/img/demo.mp4"
              className="border-8 border-white/10 rounded-xl"
            /> */}
            <img
              className="w-auto h-auto rounded-[20px] border-[10px] border-white/10"
              src="/img/demo-4.png"
              alt="Padel video thumbnail"
            />

            {/* Play button overlay */}
            {/* <button
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <div className="w-[84px] h-[84px] bg-white/40 filter backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <PlayIcon weight="fill" className="w-10 h-10 text-white" />
              </div>
            </button> */}
          </div>

          {/* Caption */}
          {/* <div className="mt-5 flex justify-center items-center space-x-3">
            <CaretUpIcon
              weight="bold"
              className="w-[15px] h-[15px] text-accent"
            />
            <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/60">
              Watch Our Latest Online Coaching Analysis
            </span>
            <CaretUpIcon
              weight="bold"
              className="w-[15px] h-[15px] text-accent"
            />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
