import { render } from "@testing-library/react";
import React from "react";
import PulseLoader from "./PulseLoader";

describe("[Pulse loader component]", () => {
  it("Render without crashing", () => {
    render(<PulseLoader />);
  });
});
