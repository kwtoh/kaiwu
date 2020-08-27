import React from "react";
import "./AboutContent.css";

interface AboutContentProps {
  header?: string;
  content: string;
}

export const AboutContent = ({ header, content }: AboutContentProps) => {
  return (
    <>
      <div className="content">
        <h1>{header}</h1>
        <p>{content}</p>
      </div>
    </>
  );
};
