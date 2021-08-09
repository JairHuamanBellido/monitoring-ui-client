import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "module/Login/LoginPage";
import { BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

test("[Login Page] show inputs for login", () => {
  const queryClient = new QueryClient();

  const { container } = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </QueryClientProvider>
  );
  expect(container.querySelectorAll("input")).toHaveLength(2);
});
