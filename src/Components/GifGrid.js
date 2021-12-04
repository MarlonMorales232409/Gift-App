import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import Loader from "./Loader";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      <h2 className="category-h2 animate__animated animate__bounce animate__fadeIn">
        {category}
      </h2>
      {loading && <Loader />}
      <hr className="category-divisor" />
      <div className="gift-container">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} category={category} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
