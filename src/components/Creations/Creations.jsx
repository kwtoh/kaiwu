import React from "react";
import Masonry from "react-masonry-css";
import { PhotoCard } from "../PhotoCard";
import "./Creation.css";

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 1,
};

const Creations = ({ images }) => {
  const imageComponent = images.map(
    ({ image, altText }) => <PhotoCard image={image} altText={altText} />
  );

  return (
    <>
      <div className="photos-grid">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="photos"
          columnClassName="photos_column">
          {imageComponent}
        </Masonry>
      </div>
    </>
  );
};

export default Creations;
