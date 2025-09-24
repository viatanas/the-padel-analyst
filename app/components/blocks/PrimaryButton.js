import Link from "next/link";
import Arrow from "@/app/components/blocks/Arrow";

const PrimaryButton = () => {
  return (
    <Link
      href="/#pricing"
      className="flex space-x-1 items-center h-8 px-3 rounded-xl bg-accent lg:hover:bg-accent/90 transition-transform duration-150 ease-out motion-safe:active:scale-[0.98]"
    >
      <span className="font-barlow font-bold text-sm uppercase text-primary tracking-[0.06em]">
        See Pricing
      </span>
      {/* <Arrow /> */}
    </Link>
  );
};

export default PrimaryButton;
