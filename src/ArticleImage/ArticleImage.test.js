import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {

  it("renders correctly", () => {
    const { container } = render(<ArticleImage url="https://images.unsplash.com/photo-1606015218098-77835ec98075?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" title="test" />);
    expect(container).toMatchSnapshot();
  });

});