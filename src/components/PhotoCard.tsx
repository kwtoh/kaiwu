import React from "react";

type CardProps = {
  image: string;
  altText?: string;
};

export const PhotoCard = ({ image, altText }: CardProps) => (
  <div className="photo-card">
    <img src={image} alt={altText} width="100%" />
  </div>
);
