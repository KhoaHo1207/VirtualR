import { useRef, useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const featureSectionRef = useRef(null);
  const workflowRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const scrollToSection = (section) => {
    console.log(section);
    section?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        onFeatureSectionScroll={() => scrollToSection(featureSectionRef)}
        onWorkFlowRef={() => scrollToSection(workflowRef)}
        onPricingRef={() => scrollToSection(pricingRef)}
        onTestimonialsRef={() => scrollToSection(testimonialsRef)}
      />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection ref={featureSectionRef} />
        <Workflow ref={workflowRef} />
        <Pricing ref={pricingRef} />
        <Testimonials ref={testimonialsRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
