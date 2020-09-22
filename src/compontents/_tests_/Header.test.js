import React from "react";
import Header from "../Header/Header";
import { renderWithRouter } from "../../testUtils";

describe("Header Component", () => {
  it("displays language controls", () => {
    const { getByText } = renderWithRouter(<Header />);

    expect(getByText(/en/i)).toBeInTheDocument();
    expect(getByText(/pl/i)).toBeInTheDocument();
  });
});
