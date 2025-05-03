
"use client";
import { CardHoverEffectDemo } from "@/components/CardHover";
import { CoreStrengths } from "@/components/CoreStrengths";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { HeroScrollDemo } from "@/components/HeroScroll";
import FloatingNavDemo from "@/components/Navbar";
import Typeform from "@/components/Typeform";
import { FeaturesSection } from "@/components/VoFeatures";
import Lenis from "lenis";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
   // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time: any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  },  []);
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_white,_#A7C7E7)]">


      <FloatingNavDemo />
      <HeroScrollDemo />
      <CoreStrengths />
      <FeaturesSection />
      {/* <Features/> */}
      <Typeform />
      <Footer />
    </div>
  );
}


