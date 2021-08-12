import { render } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("[Button component]", () => {
  it("Render without crashing", () => {
    render(<Button text="Ingresar" />);
  });

  it("Display text", () => {
    const { getByText } = render(<Button text="Ingresar" />);

    expect(getByText(/Ingresar/i)).toBeInTheDocument();
  });
});
