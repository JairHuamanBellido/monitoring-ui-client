import { render } from "@testing-library/react";
import React from "react";
import Flex from "./Flex";

describe("[Flex component]", () => {
  it("Render without crashing", () => {
    render(<Flex />);
  });
});
