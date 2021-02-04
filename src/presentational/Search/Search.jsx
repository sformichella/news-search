import React from "react";
import PropTypes from "prop-types";

export default function Search({ search, onSearchChange }) {
  return (
    <form>
      <label htmlFor="article-search">Search Articles</label>
      <input
        type="text"
        value={ search }
        id="article-search"
        onChange={ onSearchChange }
      />
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};
