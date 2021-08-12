import { render } from "@testing-library/react";
import React from "react";
import InputFile from "./InputFile";
describe("[Input file component]", () => {
  it("Render without crashing", () => {
    render(<InputFile onChange={() => {}} />);
  });
});
