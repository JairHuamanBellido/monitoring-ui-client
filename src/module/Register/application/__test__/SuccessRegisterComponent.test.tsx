import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SuccessRegisterComponent from "../components/Sucess/SuccessRegisterComponent";

describe("[Success Register Component]", () => {
  it("Render without crashing", () => {
    render(
      <BrowserRouter>
        <SuccessRegisterComponent />
      </BrowserRouter>
    );
  });

  it("Display a title", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SuccessRegisterComponent />
      </BrowserRouter>
    );
    expect(getByText(/Enhorabuena/i)).toBeInTheDocument();
  });
});
