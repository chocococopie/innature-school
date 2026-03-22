"use client";
import React from "react";

const HeroVideo: React.FC = () => {
  return (
    <>
      <section className="hero-video">
        <video
          className="hero-video-player"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-bee.png"
        >
          <source src="/wildbee-video.mp4" type="video/mp4" />
          <source src="/wildbee-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Torn edge 
        <div className="hero-torn"></div> */}
      </section>
    </>
  );
};

export default HeroVideo;
