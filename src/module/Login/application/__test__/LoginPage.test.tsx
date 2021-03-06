import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  UseMutationResult,
} from "react-query";
import LoginPage from "../LoginPage";
import useAuthentication from "../hooks/useAuthentication";
import { AuthenticationResponseUseCaseDto } from "module/Login/domain/usecase/dto/AuthenticationResponseUseCaseDto";
import { HttpError } from "core/types/HttpError";
import { HttpErrorType } from "core/enums/HttpErrorEnum";
import { HttpErrorMessageUIAdapter } from "core/adapter/HttpErrorMessageAdapter";
// Fix typescript types
const mockUseAuthentication = useAuthentication as jest.Mock<
  UseMutationResult<AuthenticationResponseUseCaseDto, HttpError, void, unknown>
>;

// Mock module
jest.mock("../hooks/useAuthentication");

describe("[Login Page]", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    mockUseAuthentication.mockImplementation((val) => ({
      ...val,
      isSuccess: false,
      isLoading: false,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Display inputs for authentication", () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(container.querySelectorAll("input")).toHaveLength(2);
  });

  it("Contains a form element", () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(container.querySelectorAll("form")).toHaveLength(1);
  });

  it("Display loading indicator when submit", () => {
    mockUseAuthentication.mockImplementation((args) => ({
      ...args,
      isLoading: true,
    }));
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(screen.getByTestId("loader-pulse")).toBeInTheDocument();
  });

  it("Display submit button when not request", () => {
    mockUseAuthentication.mockImplementation((args) => ({
      ...args,
      isLoading: false,
    }));
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(container.querySelectorAll("button")).toHaveLength(1);
  });

  it("Display error when credentials are incorrect", () => {
    const error = {
      code: 400,
      message: "Account blocked",
      type: HttpErrorType.INVALID_CREDENTIALS,
    };

    mockUseAuthentication.mockImplementation((args) => ({
      ...args,
      isError: true, 
      error: {
        response: {
          data: error,
        },
      },
    }));

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    const parseError = HttpErrorMessageUIAdapter.parse(error.type);
    expect(getByText(new RegExp(parseError, "i"))).toBeInTheDocument();
  });
});
