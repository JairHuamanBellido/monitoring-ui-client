import { render } from "@testing-library/react";
import React from "react";
import Input from "./Input";

describe("[Input component]", () => {
  it("Render without crashing", () => {
    render(
      <Input
        name="name"
        onChange={() => {}}
        placeholder="name"
        value={"name"}
      />
    );
  });

  it("Display value in input", () => {
    const {getByDisplayValue} = render(
      <Input
        name="name"
        onChange={() => {}}
        placeholder="name"
        value={"name"}
      />
    );

    expect(getByDisplayValue(/name/i)).toBeInTheDocument()
  });
});
