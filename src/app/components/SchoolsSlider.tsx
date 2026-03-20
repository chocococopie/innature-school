"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

type School = {
  name: string;
  logo: string;
};

const schools: School[] = [
  { name: "Green Valley School", logo: "/schools/school1.png" },
  { name: "Eco Future Academy", logo: "/schools/school2.png" },
  { name: "Nature High", logo: "/schools/school3.png" },
  { name: "Sunrise School", logo: "/schools/school4.png" },
];

const SchoolsSlider: React.FC = () => {
  return (
    <div className="schools-slider">
      <h2>Participating Schools</h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {schools.map((school, index) => (
          <SwiperSlide key={index}>
            <div className="school-card">
              <Image
                src={school.logo}
                alt={school.name}
                width={120}
                height={80}
              />
              <p>{school.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SchoolsSlider;
