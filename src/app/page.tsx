"use client";
import React from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";
import MainContent from "./components/MainContent";
import BottomSection from "./components/BottomSection";
import SoilSection from "./components/SoilSection";
import ApplicationForm from "./components/ApplicationForm";
import SchoolsSlider from "./components/SchoolsSlider";

// Dynamically import SchoolsMap to disable SSR
const SchoolsMap = dynamic(() => import("./components/SchoolsMap"), {
  ssr: false,
});

import "./page.css";

export default function BeeInfographicPage() {
  return (
    <div className="infographic-container">
      <Header />
      <HeroImage />
      <MainContent />
      <SoilSection />
      <BottomSection />
      <ApplicationForm />
      <SchoolsSlider />
      <SchoolsMap />
      <Footer />
    </div>
  );
}