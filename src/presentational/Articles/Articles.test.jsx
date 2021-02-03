import React from "react";
import { render, cleanup } from "@testing-library/react";
import Articles from "./Articles";

const articles = [
  { title: "Cool Article 1", author: "Journalist 1", description: "cool 1" },
  { title: "Cool Article 2", author: "Journalist 2", description: "cool 2" },
  { title: "Cool Article 3", author: "Journalist 3", description: "cool 3" }
];

describe("Articles component", () => {
  afterEach(() => cleanup());
  it("renders Articles", () => {
    const { asFragment } = render(<Articles 
      articles={articles}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
