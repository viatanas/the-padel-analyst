import Link from "next/link";
import FAQ from "@/app/components/blocks/FAQ";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="w-full h-auto lg:py-48 py-24 px-4 lg:px-0 flex flex-col items-center bg-primary"
    >
      <div className="flex flex-col w-full max-w-2xl">
        <div className="w-full px-5 flex flex-col">
          <p className="font-barlow font-bold text-sm uppercase tracking-[0.06em] text-accent">
            Your questions, answered
          </p>
          <h2 className="mt-7 font-gelica font-normal text-white text-3xl leading-[130%] tracking-[-0.04em]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-full flex flex-col mt-16 space-y-3">
          <FAQ
            question="How do I record my footage?"
            answer={`Anything that captures the whole court works - your phone on a tripod, a GoPro, or even a friend filming from the side. The important thing is that you’re clearly visible so your coach can give accurate feedback.`}
          />

          <FAQ
            question="Can I use footage I already have?"
            answer={`Yep. When you buy your session, we’ll send you an upload link straight away. You can use it to send footage you already have, or save it and upload a new recording anytime within 12 months.`}
          />

          <FAQ
            question="What level of player is this for?"
            answer={`All levels. Whether you’ve just started or you’re competing in club leagues, we tailor the advice to where you’re at. Basically, if you want to improve your Playtomic level, this is probably the right service for you.`}
          />

          <FAQ
            question="How long until I get my analysis?"
            answer={`Usually 2–3 days after we get your footage. We’ll email you as soon as it’s ready to watch. If our coaches are busy it might take a touch longer, but limiting slots means we can still deliver quickly.`}
          />

          <FAQ
            question="Is my footage kept private?"
            answer={`Absolutely. Only your coach sees it - it’s never shared or posted anywhere without your permission.`}
          />
        </div>

        <div className="w-full mt-12 flex justify-center space-x-2 items-center font-barlow font-bold text-sm uppercase tracking-[0.06em]">
          <div className="text-white/60">HAVE A QUESTION?</div>
          <div className="flex space-x-1 items-center text-white group hover:opacity-80">
            <Link href="mailto:contact@fairmere.com">DROP US AN EMAIL</Link>
            <ArrowRightIcon
              weight="bold"
              className="w-[13px] h-[13px] text-white group-hover:translate-x-1 transform transition duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
