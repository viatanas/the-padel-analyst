import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import Link from "next/link";

const Story = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar />
      <main className="w-full max-w-3xl mt-52 flex flex-col items-center mx-auto px-6 md:px-0">
        <div className="flex flex-col items-center w-full h-auto">
          <h1 className="font-gelica text-[52px] font-normal text-center leading-[120%] tracking-[-0.04em] text-white">
            Our Story
          </h1>
          <div className="w-full flex flex-col space-y-4 items-center mt-8">
            <div className="flex space-x-3 items-center font-barlow font-bold text-sm uppercase text-white/60 tracking-[0.06em]">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src="/img/viktor-pp.jpeg" className="w-full h-full" />
              </div>
              <span>Viktor Atanasov</span>
            </div>

            <div className="flex space-x-3 items-center font-barlow font-bold text-sm uppercase text-white/60 tracking-[0.06em]">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src="/img/rowin-pp.jpeg" className="w-full h-full" />
              </div>
              <span>Rowin Van Cauwenberge</span>
            </div>

            <div className="flex space-x-3 items-center font-barlow font-bold text-sm uppercase text-white/60 tracking-[0.06em]">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src="/img/paula-pp.png" className="w-full h-full" />
              </div>
              <span>Paula Alonso </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[900px] flex flex-col h-auto mt-40 pb-40">
          <h2 className="font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white">
            Why we started Point Rewind
          </h2>

          <p className="mt-6 font-geist font-medium text-[18px] text-white/70 leading-relaxed">
            Ever wanted coaching but found it too hard to book, too expensive,
            or simply not available? You’re not alone.
          </p>

          <p className="mt-6 font-geist font-medium text-[18px] text-white/70 leading-relaxed">
            Padel is booming worldwide. Courts are opening everywhere, and more
            people are playing than ever before. But coaching hasn’t kept pace.
            For many players, access to quality feedback is limited.
          </p>

          <p className="mt-8 font-geist font-medium text-[18px] text-white/70 leading-relaxed">
            That’s where Point Rewind comes in. We connect players worldwide
            with world-class coaches who provide clear, personal feedback on
            your game. No more crowded group sessions with eight people crammed
            on one court. Just tailored advice to help you improve faster.
          </p>

          <h2 className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white">
            Who we are
          </h2>
          <p className="mt-6 font-geist font-medium text-[18px] text-white/70 leading-relaxed">
            We’re Paula, Rowin, and Viktor - padel fanatics just like you. Our
            passion for the sport pushed us to create something that makes
            improvement accessible for every player, no matter the level.
          </p>
          <p className="mt-6 font-geist font-medium text-[18px] text-white/70 leading-relaxed">
            At Point Rewind, we work only with carefully selected coaches from
            around the world, experienced professionals who know how to spot the
            details that make the biggest difference in your game.
          </p>

          <h2 className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white">
            What’s in it for you
          </h2>
          <p className="mt-8 font-geist font-medium text-[18px] text-white/70 leading-relaxed">
            With Point Rewind, you don’t just get advice from some “online padel
            guru.” You get feedback from real, professional coaches with years
            of experience on court. They don’t just point out mistakes - they
            give you clear, practical tips you can apply right away.
          </p>

          <p className="mt-8 font-geist font-medium text-[18px] text-white/70 leading-relaxed">
            Our programs are designed to help you track progress and actually
            see your growth over time. If you choose multiple analyses, you’ll
            be paired with a dedicated coach who follows your journey, so every
            review builds on the last, guiding you step by step toward real
            improvement.
          </p>

          <p className="mt-8 font-geist font-medium text-[18px] text-white/70 leading-relaxed">
            The ultimate goal: for you to feel the difference on court and enjoy
            the sport even more.
          </p>

          <div className="w-full bg-white/10 py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between rounded-2xl mt-20">
            <h3 className="font-gelica text-2xl md:text-3xl text-white leading-snug max-w-xl">
              Ready to elevate your game?
            </h3>
            <Link
              href="/#pricing"
              className="mt-6 md:mt-0 bg-accent text-black font-barlow font-bold text-sm uppercase tracking-[0.06em] px-6 py-3 rounded-xl hover:bg-accent/90 transition"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Story;
