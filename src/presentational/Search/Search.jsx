import React from "react";
import PropTypes from "prop-types";

export default function Search({ search, onSearchChange }) {
  return (
    <form>
      <input
        type="text"
        value={ search }
        name="article-search"
        onChange={ onSearchChange }
      />
    </form>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};
