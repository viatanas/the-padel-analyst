"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  CaretUpIcon,
  PlayIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import PrimaryButton from "@/app/components/blocks/PrimaryButton";

const Header = () => {
  const videos = [
    {
      src: "https://tyb51xtyept4442y.public.blob.vercel-storage.com/point-rewind-review",
      poster: "/img/video-preview.png",
    },
    {
      src: "https://tyb51xtyept4442y.public.blob.vercel-storage.com/point-rewind-demo-two",
      poster: "/img/video-preview-two.png",
    },
    {
      src: "https://tyb51xtyept4442y.public.blob.vercel-storage.com/point-rewind-demo-three",
      poster: "/img/video-preview-three.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.controls = true;
    v.play();
    setIsPlaying(true);
  };

  const goTo = (nextIndex) => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
      v.controls = false;
    }
    setIsPlaying(false);
    setIndex(nextIndex);
  };

  const prev = () => goTo((index - 1 + videos.length) % videos.length);
  const next = () => goTo((index + 1) % videos.length);

  return (
    <header className="w-full h-auto px-4 md:px-0 py-10 md:pb-24 md:pt-48 flex mt-20 lg:mt-0 justify-center items-center bg-primary">
      <div className="w-full flex flex-col items-center">
        {/* Top content */}
        <div className="max-w-[610px] w-full flex flex-col items-center">
          <div className="flex space-x-3 items-center">
            <div className="w-[10px] h-[10px] rounded bg-accent animate-pulse" />
            <span className="font-barlow font-bold text-sm uppercase text-white/60 tracking-[0.06em]">
              Limited Slots Available
            </span>
          </div>

          <h1 className="mt-6 hidden md:block font-gelica text-5xl font-normal text-center leading-[130%] tracking-[-0.04em] text-white max-w-4xl">
            <span className="block">Send Your Padel Recording.</span>
            <span className="block">Get Pro Feedback. Level Up.</span>
          </h1>

          <h1 className="mt-6 md:hidden font-gelica text-[36px] font-normal text-center leading-[120%] tracking-[-0.04em] text-white max-w-4xl">
            Send Your Padel Recording. Get Pro Feedback. Level Up.
          </h1>

          <p className="mt-4 md:mt-6 font-geist font-medium text-center text-base md:text-lg text-white/80 leading-relaxed">
            {` Send us your match footage and we’ll deliver a personalised video
            review, packed with clear insights, targeted fixes, and drills to
            help you sharpen your padel game. Your Playtomic rating will thank
            you.`}
          </p>

          <div className="mt-8 md:mt-6 flex space-x-2">
            <PrimaryButton />
            <Link
              href="/story"
              className="flex space-x-1 items-center h-8 px-3 rounded-xl bg-white/20 hover:bg-white/25 transition-transform duration-150 ease-out motion-safe:active:scale-[0.98]"
            >
              <span className="font-barlow font-bold text-sm uppercase text-white tracking-[0.06em]">
                Our Story
              </span>
            </Link>
          </div>
        </div>

        {/* Video (mobile = swipeable, desktop = arrows) */}
        <div className="md:mt-16 mt-12 w-full items-center max-w-5xl">
          {/* Mobile: swipeable */}
          <div className="md:hidden">
            <div
              className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
              style={{ scrollBehavior: "smooth" }}
            >
              {videos.map((v, i) => (
                <div key={i} className="snap-start shrink-0 w-[80vw]">
                  <video
                    src={v.src}
                    poster={v.poster}
                    preload="none"
                    playsInline
                    className="border-4 h-[175px] border-white/10 rounded-2xl w-full"
                    controls
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: with arrows */}
          <div className="relative group z-50 hidden md:block">
            <video
              key={index}
              ref={videoRef}
              src={videos[index].src}
              poster={videos[index].poster}
              preload="none" // <-- ensures poster shows until play
              playsInline // <-- iOS/Safari friendly
              className="border-8 border-white/10 rounded-2xl w-full transition-opacity duration-300 ease-out z-0"
              controls={false}
              onClick={() => !isPlaying && handlePlay()} // <-- click video to play
              onEnded={() => setIsPlaying(false)}
              onPause={() => {
                const v = videoRef.current;
                if (v && v.currentTime === 0) setIsPlaying(false);
              }}
            />

            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 z-20 flex items-center justify-center" // <-- above arrows
                aria-label="Play video"
              >
                <div className="md:w-[110px] md:h-[110px] w-16 h-16 bg-white/40 filter backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <PlayIcon
                    weight="fill"
                    className="md:w-12 md:h-12 w-8 h-8 text-white"
                  />
                </div>
              </button>
            )}

            {/* Arrows (keep below overlay) */}
            <button
              onClick={prev}
              aria-label="Previous video"
              className="absolute -left-10 lg:-left-20 top-1/2 -translate-y-1/2 p-2 lg:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm z-10"
            >
              <CaretLeftIcon weight="bold" className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              aria-label="Next video"
              className="absolute -right-10 lg:-right-20 top-1/2 -translate-y-1/2 p-2 lg:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm z-10"
            >
              <CaretRightIcon weight="bold" className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Caption */}
          <div className="mt-5 flex justify-center items-center space-x-3 z-0">
            <CaretUpIcon
              weight="bold"
              className="w-[15px] h-[15px] text-accent"
            />
            <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/60">
              See Coaching in Action
            </span>
            <CaretUpIcon
              weight="bold"
              className="w-[15px] h-[15px] text-accent"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// "use client";

// import { useRef, useState } from "react";
// import Link from "next/link";
// import { CaretUpIcon, PlayIcon } from "@phosphor-icons/react/dist/ssr";
// import PrimaryButton from "@/app/components/blocks/PrimaryButton";

// const Header = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.controls = true; // show native controls
//     v.play(); // start playback
//     setIsPlaying(true); // hide overlay
//   };

//   return (
//     <header className="w-full h-auto px-7 md:px-0 py-10 md:pb-24 md:pt-48 flex mt-20 lg:mt-0 justify-center items-center bg-primary">
//       <div className="w-full flex flex-col items-center">
//         {/* Top content */}
//         <div className="max-w-[610px] w-full flex flex-col items-center">
//           <div className="flex space-x-3 items-center">
//             <div className="w-[10px] h-[10px] rounded bg-accent animate-pulse" />
//             <span className="font-barlow font-bold text-sm uppercase text-white/60 tracking-[0.06em]">
//               Limited Slots Available
//             </span>
//           </div>

//           {/* Main Heading */}
//           <h1 className="mt-6 hidden md:block font-gelica text-5xl font-normal text-center leading-[130%] tracking-[-0.04em] text-white max-w-4xl">
//             <span className="block">Send Your Padel Recording.</span>
//             <span className="block">Get Pro Feedback. Level Up.</span>
//           </h1>

//           <h1 className="mt-6 md:hidden font-gelica text-[36px] font-normal text-center leading-[120%] tracking-[-0.04em] text-white max-w-4xl">
//             Send Your Padel Recording. Get Pro Feedback. Level Up.
//           </h1>

//           {/* Paragraph */}
//           <p className="mt-4 md:mt-6 font-geist font-medium text-center text-base md:text-lg text-white/80 leading-relaxed">
//             {` Send us your match footage and we’ll deliver a personalised video
//             review, packed with clear insights, targeted fixes, and drills to
//             help you sharpen your padel game. Your Playtomic rating will thank
//             you.`}
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 md:mt-6 flex space-x-2">
//             <PrimaryButton />
//             <Link
//               href="/story"
//               className="flex space-x-1 items-center h-8 px-3 rounded-xl bg-white/20 hover:bg-white/25 transition-transform duration-150 ease-out motion-safe:active:scale-[0.98]"
//             >
//               <span className="font-barlow font-bold text-sm uppercase text-white tracking-[0.06em]">
//                 Our Story
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* Video */}
//         <div className="md:mt-16 mt-12 w-full items-center max-w-5xl">
//           <div className="relative group z-50">
//             <video
//               ref={videoRef}
//               src="https://tyb51xtyept4442y.public.blob.vercel-storage.com/point-rewind-review"
//               className="border-8 border-white/10 rounded-2xl w-full"
//               poster="/img/video-preview.png"
//               controls={false}
//               onEnded={() => setIsPlaying(false)} // show overlay again at end
//               onPause={() => {
//                 // If the user pauses before seeking, keep controls but show overlay again if at start
//                 const v = videoRef.current;
//                 if (v && v.currentTime === 0) setIsPlaying(false);
//               }}
//             />

//             {!isPlaying && (
//               <button
//                 onClick={handlePlay}
//                 className="absolute inset-0 flex items-center justify-center"
//                 aria-label="Play video"
//               >
//                 <div className="md:w-[110px] md:h-[110px] w-16 h-16 bg-white/40 filter backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
//                   <PlayIcon
//                     weight="fill"
//                     className="md:w-12 md:h-12 w-8 h-8 text-white"
//                   />
//                 </div>
//               </button>
//             )}
//           </div>

//           {/* Caption */}
//           <div className="mt-5 flex justify-center items-center space-x-3 z-0">
//             <CaretUpIcon
//               weight="bold"
//               className="w-[15px] h-[15px] text-accent"
//             />
//             <span className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/60">
//               See Coaching in Action
//             </span>
//             <CaretUpIcon
//               weight="bold"
//               className="w-[15px] h-[15px] text-accent"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
