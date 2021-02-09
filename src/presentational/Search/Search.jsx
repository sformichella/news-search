import React from "react";
import PropTypes from "prop-types";

export default function Search({ search, onSearchChange }) {
  return (
    <>
      <label htmlFor="article-search">Search Articles</label>
      <input
        id="article-search"
        type="text"
        value={ search }
        onChange={ onSearchChange }
      />
    </>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};
