import About from "@/components/about/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurNumbers from "@/components/OurNumbers";
import SectionSeparator from "@/components/SectionSeparator";
import Services from "@/components/Services";
import Team from "@/components/Team";
import VideoSectionSeparator from "@/components/VideoSectionSeparator";
import WhatWeDoDifferently from "@/components/WhatWeDoDifferently";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WhatWeDoDifferently />
      <SectionSeparator />
      <OurNumbers />
      <VideoSectionSeparator />
      <Services />
      <Team />
      <Clients />
      <ContactForm />
      <Contact />
      <Footer />
    </main>
  );
}
