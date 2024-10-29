"use client";
import { useRef } from "react";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  const featuresRef = useRef(null); // Referencia para Features
  const productShowcaseRef = useRef(null); // Referencia para ProductShowcase
  const callToActionRef = useRef(null); // Referencia para CallToAction

  return (
    <>
      <Navbar
        featuresRef={featuresRef}
        productShowcaseRef={productShowcaseRef}
        callToActionRef={callToActionRef} // Pasar la referencia de CallToAction
      />
      <Hero callToActionRef={callToActionRef} />
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={productShowcaseRef}>
        <ProductShowcase callToActionRef={callToActionRef} />
      </div>
      <FAQs />
      <div ref={callToActionRef}>
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
