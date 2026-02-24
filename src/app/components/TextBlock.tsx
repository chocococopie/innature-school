import React from "react";

interface TextBlockProps {
  className?: string;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  torn?: boolean;
  centered?: boolean;
}

const TextBlock: React.FC<TextBlockProps> = ({
  className = "",
  title,
  text,
  children,
  torn = false,
  centered = false,
}) => {
  return (
    <div className={`text-block ${centered ? "centered" : ""} ${className}`}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {children}

      {torn && (
        <img src="/torn.png" alt="" className="torn-edge" aria-hidden="true" />
      )}
    </div>
  );
};

export default TextBlock;