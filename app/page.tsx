import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
