import {
  TicketIcon,
  VideoIcon,
  StrategyIcon,
} from "@phosphor-icons/react/dist/ssr";

const Format = () => {
  return (
    <section
      id="how-it-works"
      className="w-full h-auto py-16 md:py-24 px-4 md:px-0 flex justify-center items-center bg-primary"
    >
      <div className="w-full max-w-5xl flex flex-col">
        <div className="w-full px-5 flex flex-col">
          <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
            How It Works
          </p>
          <h2 className="mt-7 font-gelica font-normal text-white text-3xl leading-[130%] tracking-[-0.04em]">
            Upload Recording. Send Footage. Receive Analysis.
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row mt-12 md:space-x-3 space-y-3 md:space-y-0">
          {/* Box 1 */}
          <div className="w-full h-auto md:h-[300px] flex flex-col justify-between p-7 rounded-[20px] bg-white/10 filter backdrop-blur-sm border border-white/5">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 pb-[2px] flex justify-center items-center rounded-xl bg-white/10">
                <span className="font-barlow font-bold text-[20px] uppercase text-white tracking-[0.06em]">
                  1
                </span>
              </div>
              <TicketIcon weight="bold" className="w-6 h-6 text-accent" />
            </div>

            <div className="mt-10 md:mt-0">
              <span className="font-gelica font-normal text-white text-2xl leading-[130%] tracking-[-0.04em]">
                Choose Package
              </span>
              <p className="mt-3 font-geist font-normal text-[18px] text-white/60 leading-[160%]">
                Pick 1, 3, or 5 video reviews, depending on how much progress
                tracking you want.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full h-auto md:h-[300px] flex flex-col justify-between p-7 rounded-[20px] bg-white/10 filter backdrop-blur-sm border border-white/5">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 pb-[2px] flex justify-center items-center rounded-xl bg-white/10">
                <span className="font-barlow font-bold text-[20px] uppercase text-white tracking-[0.06em]">
                  2
                </span>
              </div>
              <VideoIcon weight="bold" className="w-6 h-6 text-accent" />
            </div>

            <div className="mt-10 md:mt-0">
              <span className="font-gelica font-normal text-white text-2xl leading-[130%] tracking-[-0.04em]">
                Send Footage
              </span>
              <p className="mt-3 font-geist font-normal text-[18px] text-white/60 leading-[160%]">
                Send your gameplay video whenever it works best for you - right
                after a match or later on.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full h-auto md:h-[300px] flex flex-col justify-between p-7 rounded-[20px] bg-white/10 filter backdrop-blur-sm border border-white/5">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 pb-[2px] flex justify-center items-center rounded-xl bg-white/10">
                <span className="font-barlow font-bold text-[20px] uppercase text-white tracking-[0.06em]">
                  3
                </span>
              </div>
              <StrategyIcon weight="bold" className="w-6 h-6 text-accent" />
            </div>

            <div className="mt-10 md:mt-0">
              <span className="font-gelica font-normal text-white text-2xl leading-[130%] tracking-[-0.04em]">
                Receive Analysis
              </span>
              <p className="mt-3 font-geist font-normal text-[18px] text-white/60 leading-[160%]">
                Get a personalised coaching video with expert breakdowns,
                feedback, and clear next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Format;
