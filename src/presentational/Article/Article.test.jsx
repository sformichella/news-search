import React from "react";
import { render, cleanup } from "@testing-library/react";
import Article from "./Article";

describe("Article component", () => {
  afterEach(() => cleanup());
  it("renders Article", () => {
    const { asFragment } = render(<Article
      title="Super Cool Article"
      author="SuperCoolArticle Person"
      description="A very super cool article."
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
