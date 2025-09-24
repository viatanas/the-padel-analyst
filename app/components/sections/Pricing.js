import { ChecksIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const plans = [
  {
    title: "1 Video Review",
    priceLabel: "£50",
    priceNote: "",
    description:
      "One video review for a detailed, personalised analysis of your gameplay - perfect for quick, focused feedback.",
    features: [
      "1 Video",
      "10 min gameplay duration",
      "30 min coaching review back",
      "Valid 12 months",
    ],
    cta: "Get Review",
    href: "https://buy.stripe.com/eVq3cvf0k9dn9WEglueQM00",
    highlighted: false,
  },
  {
    title: "3 Video Reviews",
    priceLabel: "£135",
    priceNote: "Most Popular",
    description:
      "Build momentum with three reviews. Great for spotting patterns and tracking improvements over time.",
    features: [
      "3 Videos",
      "15 min gameplay duration",
      "30 min coaching review back",
      "Dedicated Coach",
    ],
    cta: "Get 3 Reviews",
    href: "https://buy.stripe.com/aFa8wP4lG3T3fgYfhqeQM01",
    highlighted: true,
  },
  {
    title: "5 Video Reviews",
    priceLabel: "£200",
    priceNote: "",
    description:
      "For committed players. A full mini-season of feedback to refine habits and elevate your game.",
    features: [
      "5 Videos",
      "20 min gameplay duration",
      "30 min coaching review back",
      "Dedicated Coach",
    ],
    cta: "Get 5 Reviews",
    href: "https://buy.stripe.com/dRmaEX4lG0GRecU5GQeQM02",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full h-auto py-16 md:py-24 px-4 md:px-0 flex justify-center items-center bg-primary"
    >
      <div className="w-full max-w-5xl flex justify-center items-center">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {plans.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-3xl transition-all duration-300 ${
                p.highlighted
                  ? "bg-white/20 ring-2 ring-accent md:scale-105 py-10"
                  : "bg-white/10 py-8 md:scale-95"
              } px-7`}
            >
              {/* Badge */}
              {p.priceNote && (
                <div className="absolute -top-3 left-5 rounded-full bg-accent text-primary px-3 py-1 font-barlow font-bold text-xs uppercase tracking-[0.06em]">
                  {p.priceNote}
                </div>
              )}

              {/* Price */}
              <div className="font-barlow font-bold text-2xl uppercase tracking-[0.06em] text-accent">
                {p.priceLabel}
              </div>

              {/* Title + blurb */}
              <div className="flex flex-col mt-5 space-y-3">
                <h3 className="font-gelica font-normal text-white text-[28px] leading-[130%] tracking-[-0.04em]">
                  {p.title}
                </h3>
                <p className="font-geist font-normal text-[18px] text-white/80 leading-[160%]">
                  {p.description}
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mt-10">
                {p.features.map((f) => (
                  <li key={f} className="flex space-x-3 items-center">
                    <ChecksIcon
                      weight="bold"
                      className="w-[18px] h-[18px] text-accent"
                    />
                    <span className="font-barlow font-bold text-base uppercase tracking-[0.06em] text-white/90">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-20">
                <Link
                  href={p.href}
                  className="w-full h-12 rounded-xl flex space-x-2 justify-center items-center font-barlow font-bold text-base uppercase tracking-[0.06em] bg-accent lg:hover:bg-accent/90 text-primary"
                >
                  <span>{p.cta}</span>
                  <span className="opacity-20">|</span>
                  <span>{p.priceLabel}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
