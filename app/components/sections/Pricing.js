import { ChecksIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="w-full h-auto py-16 md:py-24 px-4 md:px-0 flex justify-center items-center bg-primary">
      <div className="w-full max-w-5xl flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-start bg-white/5 p-4 md:p-10 rounded-3xl">
          {/* Left: copy block */}
          <div className="flex flex-col justify-between h-full">
            <div className="p-4 md:p-10">
              <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent   ">
                Buy Session
              </p>
              <h2 className="mt-7 font-gelica font-normal text-[32px] leading-[130%] tracking-[-0.04em] text-white">
                Ready to take your padel game to the next level?
              </h2>
            </div>
            <div className="hidden md:flex space-x-3 items-center p-10">
              <div className="w-[10px] h-[10px] rounded bg-accent animate-pulse"></div>
              <span className="font-barlow font-bold text-sm uppercase text-white/60 tracking-[0.06em]">
                Limited Slots Available
              </span>
            </div>
          </div>

          {/* Right: price card */}
          <div className="rounded-3xl bg-white/10 p-7">
            {/* Price */}
            <div className="font-barlow font-bold text-2xl uppercase tracking-[0.06em] text-accent">
              £50
            </div>

            {/* Title + blurb */}
            <div className="flex flex-col mt-5 space-y-3">
              <h3 className="font-gelica font-normal text-white text-[28px] leading-[130%] tracking-[-0.04em]">
                Single Session
              </h3>
              <p className="font-geist font-normal text-[18px] text-white/80 leading-[160%]">
                One coaching credit for a detailed, personalised analysis of
                your gameplay - perfect for quick, focused feedback.
              </p>
            </div>

            {/* Feature list */}
            <ul className="space-y-3 mt-10">
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  1 X Lesson
                </span>
              </div>
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  Valid For 12 Months
                </span>
              </div>
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  Easy Video Upload
                </span>
              </div>
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  Expert Analysis
                </span>
              </div>
            </ul>

            {/* CTA */}
            <div className="mt-20">
              <Link
                href="https://buy.stripe.com/eVq3cvf0k9dn9WEglueQM00"
                className="w-full h-12 rounded-xl bg-accent lg:hover:bg-accent/90 flex space-x-2 justify-center items-center font-barlow font-bold text-base uppercase tracking-[0.06em] text-primary"
              >
                <span>Upload Footage</span>
                <span className="opacity-20">|</span>
                <span>£50</span>
              </Link>
            </div>
          </div>

          <div className="flex md:hidden space-x-3 items-center mx-auto">
            <div className="w-[10px] h-[10px] rounded bg-accent animate-pulse"></div>
            <span className="font-barlow font-bold text-sm uppercase text-white/60 tracking-[0.06em]">
              Limited Slots Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
