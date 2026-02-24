'use client';
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Left Bee Icon */}
      <div className="header-left">
        <Image src="/bee-icon.png" alt="Bee icon" width={70} height={50} />
      </div>

      {/* Center Title */}
      <div className="header-title">InNature</div>

      {/* Right Hamburger */}
      <div className="header-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;