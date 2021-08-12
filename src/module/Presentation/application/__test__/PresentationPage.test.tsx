import React from "react";
import { screen, render, RenderResult } from "@testing-library/react";
import PresentationPage from "../PresentationPage";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import query from "@testing-library/dom/types/queries";

describe("[Presentation Page]", () => {
  const queryClient = new QueryClient();
  let component: RenderResult<typeof query, HTMLElement>;
  beforeEach(() => {
    component = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PresentationPage />
        </BrowserRouter>
      </QueryClientProvider>
    );
  });
  test("[Presentation Page] Show Title of Application", () => {
    expect(component.container.querySelectorAll("h1")).toHaveLength(1);
    expect(screen.getByText("Aprix")).toBeInTheDocument();
  });

  test("[Presentation Page] Has two panels", () => {
    expect(component.container.children.item(0)?.childElementCount).toBe(2);
  });
});
