"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import HeroImage from "./components/HeroImage";
import HeroVideo from "./components/HeroVideo";
import MainContent from "./components/MainContent";
import BottomSection from "./components/BottomSection";
import SoilSection from "./components/SoilSection";
import HabitatSection from "./components/HabitatSection";
import ApplicationForm from "./components/ApplicationForm";
import "./page.css";

// 🔥 BOTH must be dynamic
const SchoolsSlider = dynamic(() => import("./components/SchoolsSlider"), {
  ssr: false,
});

const SchoolsMap = dynamic(() => import("./components/SchoolsMap"), {
  ssr: false,
});

export default function BeeInfographicPage() {
  return (
    <div className="infographic-container">
      <Header />
  {/*    <HeroImage /> */}
      <HeroVideo />
      <MainContent />
      <SoilSection />
      <HabitatSection />
      <BottomSection />
      <ApplicationForm />
      <SchoolsSlider />
      <SchoolsMap />
      <Footer />
    </div>
  );
}