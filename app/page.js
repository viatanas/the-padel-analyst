import Navbar from "@/app/components/sections/Navbar";
import Header from "@/app/components/sections/Header";
import Benefits from "@/app/components/sections/Benefits";
import Format from "@/app/components/sections/Format";
import Coaches from "@/app/components/sections/Coaches";
import Testimonials from "@/app/components/sections/Testimonials";
import FAQSection from "@/app/components/sections/FAQSection";
import Footer from "@/app/components/sections/Footer";
import Pricing from "@/app/components/sections/Pricing";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar />
      <Header />
      <Benefits />
      <Format />
      <Coaches />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <Footer />
    </div>
  );
}
