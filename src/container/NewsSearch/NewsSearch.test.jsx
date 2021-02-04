import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewsSearch from "./NewsSearch";

describe("NewsSearch", () => {
  it("puts articles in state on search change", () => {
    render(<NewsSearch />);

    const searchInput = screen.getByLabelText("article-search");
    
    fireEvent.change(searchInput, {
      target: {
        value: "cute puppies"
      }
    });
  });
});
