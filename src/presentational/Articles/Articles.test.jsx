import React from "react";
import { render, cleanup } from "@testing-library/react";
import Articles from "./Articles";

describe("Articles component", () => {
  afterEach(() => cleanup());
  it("renders Articles", () => {
    const { asFragment } = render(<Articles />);
    expect(asFragment()).toMatchSnapshot();
  });
});
