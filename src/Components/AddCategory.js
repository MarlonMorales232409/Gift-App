import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    console.log("Handle Change was called");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [...cats, inputValue]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Try a Categorie like "One Punch"'
      />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
