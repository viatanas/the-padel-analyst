import {
  TicketIcon,
  VideoIcon,
  StrategyIcon,
} from "@phosphor-icons/react/dist/ssr";

const Format = () => {
  return (
    <section
      id="how-it-works"
      className="w-full h-auto py-24 flex justify-center items-center bg-primary"
    >
      <div className="w-full max-w-5xl flex flex-col">
        <div className="w-full px-5 flex flex-col">
          <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
            How It Works
          </p>
          <h2 className="mt-7 font-gelica font-normal text-white text-3xl leading-[130%] tracking-[-0.04em]">
            Book Session. Send Footage. Receive Analysis.
          </h2>
        </div>

        <div className="w-full flex mt-12 space-x-3">
          {/* Box 1 */}
          <div className="w-full h-[400px] flex flex-col justify-between p-7 rounded-[20px] bg-white/10 filter backdrop-blur-sm border border-white/5">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 pb-[2px] flex justify-center items-center rounded-xl bg-white/10">
                <span className="font-barlow font-bold text-[20px] uppercase text-white tracking-[0.06em]">
                  1
                </span>
              </div>
              <TicketIcon weight="bold" className="w-6 h-6 text-accent" />
            </div>

            <div>
              <span className="font-gelica font-normal text-white text-2xl leading-[130%] tracking-[-0.04em]">
                Buy Session
              </span>
              <p className="mt-3 font-geist font-normal text-[18px] text-white/60 leading-[160%]">
                Purchase a single coaching credit - no subscriptions, just one
                focused session.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full h-[400px] flex flex-col justify-between p-7 rounded-[20px] bg-white/10 filter backdrop-blur-sm border border-white/5">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 pb-[2px] flex justify-center items-center rounded-xl bg-white/10">
                <span className="font-barlow font-bold text-[20px] uppercase text-white tracking-[0.06em]">
                  2
                </span>
              </div>
              <VideoIcon weight="bold" className="w-6 h-6 text-accent" />
            </div>

            <div>
              <span className="font-gelica font-normal text-white text-2xl leading-[130%] tracking-[-0.04em]">
                Send Footage
              </span>
              <p className="mt-3 font-geist font-normal text-[18px] text-white/60 leading-[160%]">
                Share a video today, or film later and use your coaching credit
                when it suits you.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full h-[400px] flex flex-col justify-between p-7 rounded-[20px] bg-white/10 filter backdrop-blur-sm border border-white/5">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 pb-[2px] flex justify-center items-center rounded-xl bg-white/10">
                <span className="font-barlow font-bold text-[20px] uppercase text-white tracking-[0.06em]">
                  3
                </span>
              </div>
              <StrategyIcon weight="bold" className="w-6 h-6 text-accent" />
            </div>

            <div>
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
