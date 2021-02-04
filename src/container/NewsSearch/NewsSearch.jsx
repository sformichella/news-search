import React, { Component } from "react";
import Search from "../../presentational/Search/Search";
import Articles from "../../presentational/Articles/Articles";

import { getArticles } from "../../services/newsAPI";

export default class NewsSearch extends Component {

  state = {
    search: "",
    articles: [],
    loading: false
  }

  onSearchChange = ({ target }) => {
    const { value: search } = target;

    this.setState({ loading: true });

    getArticles(search)
      .then(articles => this.setState({ articles, loading: false }));
  }

  render() {

    const { search, articles } = this.state;
    const { onSearchChange } = this;

    return (
      <>
        <Search 
          search={ search }
          onSearchChange={ onSearchChange }/>
        <Articles 
          articles={ articles }/>
      </>
    );
  }
}
