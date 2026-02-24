import React from "react";

interface TextBlockProps {
  className?: string;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  torn?: boolean; // NEW
}

const TextBlock: React.FC<TextBlockProps> = ({
  className = "",
  title,
  text,
  children,
  torn = false, // default false
}) => {
  return (
    <div className={`text-block ${torn ? "torn" : ""} ${className}`}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {children}
    </div>
  );
};

export default TextBlock;
