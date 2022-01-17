import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="gift animate__animated animate__bounce animate__fadeIn">
      <img src={url} alt={title} className="gift-image" />
      <p className="gift-title">{title}</p>
    </div>
  );
};

export default GifGridItem;

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
