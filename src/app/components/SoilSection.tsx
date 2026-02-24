"use client";
import Image from "next/image";
import React from "react";

const HeroImage: React.FC = () => {
  return (
    <section className="hero-image">
      <Image
        src="/soil.png"
        alt="Soil"
        width={1920}
        height={300}
        priority
        className="hero-img"
      />
    </section>
  );
};

export default HeroImage;
