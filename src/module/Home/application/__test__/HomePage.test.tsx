import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../HomePage";
import useGuestUser from "../hooks/useGuestUser";
import { User } from "module/Home/domain/entity/User";
import { BrowserRouter } from "react-router-dom";

// Fix Typescript types
const mockUseGuestUser = useGuestUser as jest.Mock<any>;

// Mock
jest.mock("../hooks/useGuestUser");

beforeEach(() => {});

describe("[Home Page]", () => {
  beforeEach(() => {
    mockUseGuestUser.mockImplementation(() => ({
      isLoading: true,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Render without crashing", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it("Display loading indicator", () => {
    const { getByText } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(getByText(/Cargando/i)).toBeInTheDocument();
  });

  it("Display data", () => {
    const user: User = {
      avatar: "avatar",
      email: "email@gmail.com",
      id: 1,
      lastname: "Doe",
      name: "John",
    };
    mockUseGuestUser.mockImplementation(() => ({
      isLoading: false,
      data: user,
    }));

    const { getByText, queryByText } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // Avoid to display loading indicator
    expect(queryByText(/Cargando/i)).toBeFalsy();

    expect(getByText(new RegExp(user.name, "i"))).toBeInTheDocument();
  });
});
