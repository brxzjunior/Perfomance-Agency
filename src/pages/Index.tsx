import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Team />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
