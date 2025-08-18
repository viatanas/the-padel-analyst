import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
