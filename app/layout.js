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

      <Script id="hotjar-init" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:6511116,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
      </Script>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
