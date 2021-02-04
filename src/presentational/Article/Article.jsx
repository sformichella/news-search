import React from "react";
import PropTypes from "prop-types";

export default function Article({ title, author, description }) {
  return (
    <>
      <h1>{ title }</h1>
      <h2>{ author }</h2>
      <p>{ description }</p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired
};
