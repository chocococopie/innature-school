import React from 'react';
import TextBlock from './TextBlock';

const BottomSection: React.FC = () => {
  return (
    <footer className="bottom-section">
      <TextBlock
        className="bottom-text"
        title="Über uns"
        text="Third Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      />
      <div className="people-photo">
        <img src="/about.jpg" alt="People in nature" />
      </div>
    </footer>
  );
};

export default BottomSection;
