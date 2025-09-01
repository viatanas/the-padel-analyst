import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata = {
  title: "Point Rewind • Online Padel Coaching Made Easy",
  description:
    "Send us your match clips and get expert feedback tailored to your game.",
  openGraph: {
    title: "Point Rewind • Online Padel Coaching Made Easy",
    description:
      "Send us your match footage and get expert feedback tailored to your game.",
    images: [
      {
        url: "/img/og.png",
        width: 1200,
        height: 630,
        alt: "Point Rewind • Online Padel Coaching Made Easy",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-primary scroll-smooth">
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1082153557358817');
          fbq('track', 'PageView');
        `}
      </Script>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
