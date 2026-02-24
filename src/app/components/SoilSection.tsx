"use client";
import Image from "next/image";
import React from "react";

const HeroImage: React.FC = () => {
  return (
    <section className="hero-image">
      <Image
        src="/soil.png"
        alt="Soil"
        width={1000}
        height={100}
        priority
        className="hero-img"
      />
    </section>
  );
};

export default HeroImage;
