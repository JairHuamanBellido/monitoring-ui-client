import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("[App Component] show tittle on the page", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText("Aprix")).toBeInTheDocument();
});
test("[App Component] redirect to login page", () => {
  render(<App />, { wrapper: MemoryRouter });
  const url = window.location.pathname;
  expect(url).toBe("/login");
});