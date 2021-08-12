import { render, waitFor } from "@testing-library/react";
import { HttpErrorMessageUIAdapter } from "core/adapter/HttpErrorMessageAdapter";
import { HttpErrorType } from "core/enums/HttpErrorEnum";
import React from "react";
import ContainerError from "./ContainerError";

describe("[Container error component]", () => {
  it("Render without crashing", () => {
    render(<ContainerError codeError={HttpErrorType.INTERNAL_SERVER_ERROR} />);
  });

  it("Display a message", () => {
    const message = HttpErrorMessageUIAdapter.parse(
      HttpErrorType.INVALID_CREDENTIALS
    );

    const { getByText } = render(
      <ContainerError codeError={HttpErrorType.INVALID_CREDENTIALS} />
    );

    expect(getByText(new RegExp(message, "i"))).toBeInTheDocument();
  });

  it("Not display a wrong message", () => {
    const message = HttpErrorMessageUIAdapter.parse(
      HttpErrorType.INVALID_CREDENTIALS
    );

    const { queryByText } = render(
      <ContainerError codeError={HttpErrorType.INTERNAL_SERVER_ERROR} />
    );
    expect(queryByText(new RegExp(message, "i"))).toBeNull();
  });
});
