import {
  StrategyIcon,
  TargetIcon,
  FadersHorizontalIcon,
  LightningIcon,
  PlayCircleIcon,
  UploadSimpleIcon,
  TrendUpIcon,
  ArchiveIcon,
  TennisBallIcon,
  FastForwardCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

const Benefits = () => {
  return (
    <section className="w-full px-4 md:px-0 h-auto py-12 md:py-24 flex justify-center items-center bg-primary">
      <div className="max-w-5xl mx-auto flex flex-col space-y-16 md:space-y-24">
        {/* Benefit 1 */}
        <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left Container */}

          <div className="py-10 h-full flex flex-col justify-between px-2 md:px-0">
            <div className="flex flex-col">
              <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
                Personalised
              </p>
              <h2 className="mt-7 font-gelica font-normal text-white text-3xl leading-[130%] tracking-[-0.04em]">
                Real Match Footage Analysis
              </h2>
              <p className="mt-5 font-geist font-normal text-base text-white/80">
                No staged drills or practice rallies. Your coach reviews your
                actual match footage, so the feedback is based on how you really
                perform under pressure.
              </p>
            </div>

            {/* Feature bullets */}
            <ul className="md:mt-10 mt-16 flex flex-col space-y-5">
              <li className="flex space-x-2 items-center">
                <StrategyIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  {`Spot misplays you don’t notice mid-match`}
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <TargetIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  Targeted, Specific Corrections
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <FadersHorizontalIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  Adapts To Your Level
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/img/benefit-one.png"
                alt="Two padel players at the net during a match"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-6 md:gap-10 items-center ">
          {/* Left Container */}
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/img/benefit-two.png"
                alt="Two padel players at the net during a match"
                className="w-full h-auto object-cover grayscale"
              />
            </div>
          </div>

          {/* Right Container */}
          <div className="py-10 h-full flex flex-col justify-between order-1 md:order-2 px-2 md:px-0">
            <div className="flex flex-col">
              <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
                Convenient
              </p>
              <h2 className="mt-7 font-gelica font-normal text-white text-3xl leading-[130%] tracking-[-0.04em]">
                Coaching that fits your schedule.
              </h2>
              <p className="mt-5 font-geist font-normal text-base text-white/80">
                No need to book time slots or travel to a court. Just upload
                your video when it suits you, and get expert feedback delivered
                directly to your inbox - ready to watch whenever you are. You
                can even review it courtside… or at home with a cocktail in
                hand.
              </p>
            </div>

            {/* Feature bullets */}
            <ul className="mt-16 md:mt-10 flex flex-col space-y-5">
              <li className="flex space-x-2 items-center">
                <LightningIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  No Court Booking Required
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <PlayCircleIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  Watch Anytime, Anywhere
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <UploadSimpleIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  Simple Video Upload
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left container */}
          <div className="py-10 h-full flex flex-col justify-between px-2 md:px-0">
            <div className="flex flex-col">
              <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
                Lasting
              </p>
              <h2 className="mt-7 font-gelica font-normal text-white text-3xl leading-[130%] tracking-[-0.04em]">
                Feedback that sticks.
              </h2>
              <p className="mt-5 font-geist font-normal text-base text-white/80">
                {` Most coaching fades from memory the moment you leave the court. With your own review video, you can rewatch it whenever you need, refresh every tip, and make the changes stick. So even on one leg, your game stays solid.`}
              </p>
            </div>

            {/* Feature bullets */}
            <ul className="mt-16 md:mt-10 flex flex-col space-y-5">
              <li className="flex space-x-2 items-center">
                <FastForwardCircleIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  Rewatch until it sticks
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <TrendUpIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  Track your progress
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <ArchiveIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/90">
                  Keep it forever
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/img/benefit-three.png"
                alt="Two padel players at the net during a match"
                className="w-full h-auto object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
