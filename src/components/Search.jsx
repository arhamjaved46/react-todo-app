import React from "react";

const Search = ({ itemEvent }) => {
  return (
    <>
      <input
        type="text"
        className="input"
        // value={inputItem}
        onChange={itemEvent}
        placeholder="Add a Item"
      />
    </>
  );
};

export default Search;
