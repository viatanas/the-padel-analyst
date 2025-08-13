import { ChecksIcon } from "@phosphor-icons/react/dist/ssr";

const Coaches = () => {
  return (
    <section
      id="coaches"
      className="w-full h-auto py-16 md:py-24 flex justify-center px-7 md:px-0 items-center bg-primary"
    >
      <div className="w-full max-w-5xl flex flex-col">
        <div className="w-full px-5 flex flex-col">
          <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
            Our Coaches
          </p>
          <h2 className="mt-7 font-gelica font-normal text-white text-3xl leading-[130%] tracking-[-0.04em]">
            World Class Coaches, Players, People.
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row md:space-x-3 space-y-16 md:space-y-0 mt-[48px]">
          {/* Coach 1 */}
          <div className="w-full h-auto flex flex-col">
            <img src="/img/coach-one.png" className="grayscale w-full h-auto" />
            <span className="mt-6 font-gelica font-normal text-white text-[28px] leading-[130%] tracking-[-0.04em]">
              Marek Kovalenko
            </span>
            <p className="mt-3 font-geist font-normal text-[18px] text-white/80">
              {`Former club league champion with 4 years’ coaching experience.
              Marek thrives on working with players who want to fine-tune the
              small details that shift a match - whether that’s footwork or
              court positioning. Known for spotting patterns in a player’s game
              within just a few rallies.`}
            </p>
            <div className="mt-10 flex flex-col space-y-5">
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  4 years of coaching
                </span>
              </div>
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  English
                </span>
              </div>
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  Focus Areas: Footwork & Team Dynamics
                </span>
              </div>
            </div>
          </div>

          {/* Coach 2 */}
          <div className="w-full h-auto flex flex-col">
            <img src="/img/coach-two.png" className="grayscale w-full h-auto" />
            <span className="mt-6 font-gelica font-normal text-white text-[28px] leading-[130%] tracking-[-0.04em]">
              Adrian Morales
            </span>
            <p className="mt-3 font-geist font-normal text-[18px] text-white/80">
              {`Former junior national champ with 6 years’ coaching under his
              belt. Adrian enjoys helping ambitious players turn raw skill into
              smart, consistent play. His sessions are full of in-depth,
              practical takeaways and he’s notorious for sketching tactics on
              whatever’s nearby (sometimes including padel balls).`}
            </p>
            <div className="mt-10 flex flex-col space-y-5">
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  6+ years of coaching
                </span>
              </div>
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  English, Spanish, Italian
                </span>
              </div>
              <div className="flex space-x-3 items-center">
                <ChecksIcon
                  weight="bold"
                  className="w-[18px] h-[18px] text-accent"
                />
                <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                  Focus Areas: Tactical Gameplay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
