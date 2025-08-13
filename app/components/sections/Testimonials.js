"use client";

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Testimonials() {
  const items = [
    {
      quote:
        "It was really helpful seeing my own mistakes on video instead of guessing what went wrong.",
      name: "Marina T.",
      meta: "Intermediate | Glasgow",
    },
    {
      quote:
        "Nice to be able to watch the advice back a few times. I actually remembered it in my next game.",
      name: "Anya L.",
      meta: "Beginner | Cambridge",
    },
    {
      quote:
        "The drills were simple and actually fit the way I play. Easy to work into my practice.",
      name: "Piotr R.",
      meta: "Advanced | Cardiff",
    },
    {
      quote:
        "I wasn’t sure what to expect, but the tips were clear and made sense straight away.",
      name: "Ravi K.",
      meta: "Advanced | London",
    },
    {
      quote:
        "Saved me having to book a separate lesson. Just sent the clip and got the feedback a couple of days later.",
      name: "Lucas P.",
      meta: "Beginner | Bristol",
    },
    {
      quote:
        "The feedback was straightforward and easy to follow. I’ve already tried a couple of the tips.",
      name: "Fatima Y.",
      meta: "Beginner | London",
    },
  ];

  return (
    <section
      id="clients"
      className="w-full h-auto px-4 md:px-0 py-16 md:py-24 overflow-hidden flex justify-center items-center bg-primary"
    >
      <div className="w-full md:max-w-5xl mx-auto md:px-4 md:py-16">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="w-full md:px-5 flex flex-col">
            <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
              Clients
            </p>
            <h2 className="mt-7 font-gelica font-normal text-white text-3xl leading-[130%] tracking-[-0.04em]">
              What Players Are Saying
            </h2>
          </div>

          {/* Rating + arrows */}
          <div className="mt-7 lg:mt-0 flex items-center space-x-7 md:ml-auto">
            <div className="flex items-center space-x-[2px]">
              <StarIcon
                weight="fill"
                className="text-accent w-[15px] h-[15px]"
              />
              <StarIcon
                weight="fill"
                className="text-accent w-[15px] h-[15px]"
              />
              <StarIcon
                weight="fill"
                className="text-accent w-[15px] h-[15px]"
              />
              <StarIcon
                weight="fill"
                className="text-accent w-[15px] h-[15px]"
              />
              <StarIcon
                weight="fill"
                className="text-accent w-[15px] h-[15px]"
              />
            </div>
            <CarouselArrows targetId="testimonials-scroll" />
          </div>
        </div>

        {/* Cards scroller */}
        <div className="mx-0 md:-mx-4">
          <HorizontalScroller id="testimonials-scroll">
            {items.map((t, i) => (
              <article
                key={i}
                className="snap-start flex flex-col justify-between bg-white/5 shrink-0
             md:w-[85%] w-[95%] sm:w-[400px] lg:w-[480px] p-6 rounded-2xl border border-white/10"
              >
                <p className="font-geist font-normal text-[18px] text-white/90 leading-[160%]">
                  “{t.quote}”
                </p>
                <div className="mt-10">
                  <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
                    {t.name}
                  </p>
                  <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-white/60">
                    {t.meta}
                  </p>
                </div>
              </article>
            ))}
          </HorizontalScroller>
        </div>
      </div>
    </section>
  );
}

// --- Reusable primitives (no external deps) ---
function HorizontalScroller({ id, children }) {
  return (
    <div
      id={id}
      className="mt-12 flex gap-3 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory px-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {children}
    </div>
  );
}

function CarouselArrows({ targetId }) {
  function scroll(dir) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const card = el.querySelector("article");
    const gap = 24; // matches gap-6
    const amount = card
      ? card.offsetWidth + gap
      : Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }
  return (
    <div className="items-center gap-2 hidden md:flex">
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scroll(-1)}
        className="group h-8 w-8 rounded-xl flex justify-center items-center bg-white/10 transition-transform duration-150 ease-out motion-safe:active:scale-[0.95]"
      >
        <ArrowLeftIcon
          weight="bold"
          className="w-4 h-4 text-white/60 group-hover:text-white"
        />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scroll(1)}
        className="h-8 w-8 group rounded-xl flex justify-center items-center bg-white/10 transition-transform duration-150 ease-out motion-safe:active:scale-[0.95]"
      >
        <ArrowRightIcon
          weight="bold"
          className="w-4 h-4 text-white/60 group-hover:text-white"
        />
      </button>
    </div>
  );
}
