import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "Router/MainRouter";

describe("[Main Router]", () => {
  const queryClient = new QueryClient();

  it("Render without crashing", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </QueryClientProvider>
    );
  });
});
