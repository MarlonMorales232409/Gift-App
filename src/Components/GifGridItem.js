import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="gift animate__animated animate__bounce animate__fadeIn">
      <img src={url} alt={title} className="gift-image" />
      <p className="gift-title">{title}</p>
    </div>
  );
};

export default GifGridItem;
