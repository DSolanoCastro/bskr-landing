import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import Problems from "@/sections/Problems";
import Solution from "@/sections/Solution";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Proof from "@/sections/Proof";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import CTAFinal from "@/sections/CTAFinal";
import Footer from "@/sections/Footer";
import BexaPlaceholder from "@/components/chatbot/BexaPlaceholder";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Services />
        <Process />
        <Proof />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <BexaPlaceholder />
    </>
  );
}
