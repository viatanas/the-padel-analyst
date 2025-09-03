"use client";

import Image from "next/image";

const CoachBubblesCarousel = () => {
  const coaches = [
    "/img/coaches/pp-1.png",
    "/img/coaches/pp-2.png",
    "/img/coaches/pp-3.png",
    "/img/coaches/pp-4.png",
    "/img/coaches/pp-5.png",
    "/img/coaches/pp-6.png",
    "/img/coaches/pp-7.png",
  ];

  // Duplicate once to make a 200% wide track
  const track = [...coaches, ...coaches];

  return (
    <div className="w-full overflow-hidden mt-16 group">
      <div
        className="
          animate-scroll
          inline-flex                
          items-center
          gap-3
          md:gap-5                     
          whitespace-nowrap
          will-change-transform
        "
      >
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0"
          >
            <Image
              src={src}
              alt={`Coach ${i + 1}`}
              width={176}
              height={176}
              className="object-cover w-full h-full grayscale"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachBubblesCarousel;
