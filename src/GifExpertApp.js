import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2 className="title-app">Gift Expert App</h2>
      <hr />
      <div className="gift-main">
        <AddCategory setCategories={setCategories} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};

export default GifExpertApp;
