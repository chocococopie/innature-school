"use client";
import React from "react";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import MainContent from "./components/MainContent";
import BottomSection from "./components/BottomSection";
import SoilSection from "./components/SoilSection";
import "./page.css";

export default function BeeInfographicPage() {
  return (
    <div className="infographic-container">
      <Header />
      <HeroImage />
      <MainContent />
      <SoilSection />
      <BottomSection />
    </div>
  );
}
