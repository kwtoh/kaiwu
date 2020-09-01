import React from "react";
import Masonry from "react-masonry-css";
import { PhotoCard } from "../PhotoCard";
import "./Creation.css";
import { SRLWrapper } from "simple-react-lightbox";

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 1,
};

const Creations = ({ images }) => {
  const imageComponent = images.map(({ image, altText }) => (
    <PhotoCard image={image} altText={altText} />
  ));

  return (
    <>
      <div className="photos-grid">
        <SRLWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="photos"
            columnClassName="photos_column"
          >
            {imageComponent}
          </Masonry>
        </SRLWrapper>
      </div>
    </>
  );
};

export default Creations;
