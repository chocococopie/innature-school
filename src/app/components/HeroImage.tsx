"use client";
import Image from "next/image";
import React from "react";

const HeroImage: React.FC = () => {
  return (
    <>
      <section className="hero-image">
        <Image
          src="/hero-bee.png"
          alt="Wild flowers and bees"
          width={120}
          height={300}
          priority
          className="hero-img"
        />

        {/* Torn edge */}
        <Image
          src="/torn.png"
          alt=""
          width={1920}
          height={80}
          className="hero-torn"
        />
      </section>
    </>
  );
};

export default HeroImage;
