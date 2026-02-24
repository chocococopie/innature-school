import React from 'react';

interface TextBlockProps {
  className?: string;
  title?: string;
  text?: string;
  children?: React.ReactNode;
}

const TextBlock: React.FC<TextBlockProps> = ({ 
  className = '', 
  title, 
  text, 
  children 
}) => {
  return (
    <div className={`text-block ${className}`}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {children}
    </div>
  );
};

export default TextBlock;
