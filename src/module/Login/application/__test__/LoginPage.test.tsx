import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginPage from "../LoginPage";
import query from "@testing-library/dom/types/queries";

const queryClient = new QueryClient();
let component: RenderResult<typeof query, HTMLElement>;

beforeEach(() => {
  component = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </QueryClientProvider>
  );
});

test("[Login Page] show inputs for login", () => {
  expect(component.container.querySelectorAll("input")).toHaveLength(2);
});

test("[Login Page] show one form", () => {
  expect(component.container.querySelectorAll("form")).toHaveLength(1);
});
