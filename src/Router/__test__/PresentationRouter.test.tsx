import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import PresentationRouter from "Router/PresentationRouter";

describe("[Presentation Router]", () => {
  const queryClient = new QueryClient();

  it("Render without crashing", () => {
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PresentationRouter />
      </BrowserRouter>
    </QueryClientProvider>;
  });
});
