import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  UseMutationResult,
} from "react-query";
import RegisterPage from "../RegisterPage";
import useRegister from "../hooks/useRegister";
import { WriteResourceUseCase } from "core/usecase/WriteResourceUseCase";
import { HttpError } from "core/types/HttpError";
const mockUseRegister = useRegister as jest.Mock<
  UseMutationResult<WriteResourceUseCase, HttpError, void, unknown>
>;

jest.mock("../hooks/useRegister");

describe("[Register Page]", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    mockUseRegister.mockImplementation((args) => ({
      ...args,
      isSuccess: false,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Display Register title", () => {
    const { container, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(container.querySelectorAll("h2")).toHaveLength(1);
    expect(getByText(/Regístrate/i)).toBeInTheDocument();
  });

  it("Contains a form element", () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(container.querySelectorAll("form")).toHaveLength(1);
  });

  it("Display 8 inputs", () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(container.querySelectorAll("input")).toHaveLength(8);
  });

  it("Display loading indicator when submit", () => {
    mockUseRegister.mockImplementation((args) => ({
      ...args,
      isLoading: true,
    }));

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("loader-pulse")).toBeInTheDocument();
  });

  it("Display submit button when not request", () => {
    mockUseRegister.mockImplementation((args) => ({
      ...args,
      isLoading: false,
    }));

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(container.querySelectorAll("button")).toHaveLength(1);
  });

  it("Display a sucessfull component when submited", () => {
    mockUseRegister.mockImplementation((args) => ({
      ...args,
      isSuccess: true,
    }));

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(getByText(/éxito/i)).toBeInTheDocument();
  });
});
