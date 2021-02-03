import React, { Component } from "react";
import Search from "../../presentational/Search/Search";
import Articles from "../../presentational/Articles/Articles";

export default class NewsSearch extends Component {

  state = {
    search: "",
    articles: []
  }

  onSearchChange = () => {

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
