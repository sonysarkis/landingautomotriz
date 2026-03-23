import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Fleet from "@/components/Fleet";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Fleet />
        <About />
        <Testimonials />
        <LeadForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
