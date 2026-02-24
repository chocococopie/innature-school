import React from 'react';
import TextBlock from './TextBlock';

const BottomSection: React.FC = () => {
  return (
    <footer className="bottom-section">
      <TextBlock 
        className="bottom-text"
        title="Über uns"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="people-photo">
        <img 
          src="/about.jpg" 
          alt="People in nature" 
        />
      </div>
    </footer>
  );
};

export default BottomSection;
