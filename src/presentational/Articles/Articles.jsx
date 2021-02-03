import React from "react";
import PropTypes from "prop-types";
import Article from "../Article copy/Article";

export default function Articles({ articles }) {
  return (
    <ul>
      {
        articles.map((article, i) => {
          return (
            <li key={i}>
              <Article {...article}/>
            </li>
          );
        })
      }
    </ul>
  );
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};
