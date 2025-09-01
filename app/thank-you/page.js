import Link from "next/link";
import Arrow from "@/app/components/blocks/Arrow";
import Script from "next/script";

export default function ThankYou() {
  return (
    <>
      <Script id="fb-purchase" strategy="afterInteractive">
        {`
      fbq('track', 'Purchase', {
      value: 50,
      currency: 'GBP'
        });
        
      `}
      </Script>

      <main className="w-screen h-screen flex flex-col items-center bg-background">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-gelica text-4xl font-normal text-center leading-[130%] tracking-[-0.04em] text-white">
            Booking Successful
          </h1>
          <p className="mt-5 font-geist font-normal text-base text-white/80 max-w-sm">
            {`Your coaching credit is confirmed. We’ll send you an email with your personal upload link shortly - you’ll have 30 days to use it.`}
          </p>
          <Link
            href="/"
            className="mt-8 flex space-x-1 items-center h-8 px-3 rounded-xl bg-accent lg:hover:bg-accent/90 transition-transform duration-150 ease-out motion-safe:active:scale-[0.98]"
          >
            <span className="font-barlow font-bold text-sm uppercase text-primary tracking-[0.06em]">
              Back To Home
            </span>
            <Arrow />
          </Link>
        </div>
      </main>
    </>
  );
}
