import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    backgroundColor: selected ? "#a19aea" : "#f9f9f9",
  };

  return (
    <button
      type="button"
      style={tagStyle}
      className="tag"
      onClick={() => selectTag && selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
