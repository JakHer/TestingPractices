import React from "react";
import { getAllByAltText, getAllByText, getByText, render, waitForElement } from "@testing-library/react";
import Users from "../Users";
import axios from "axios";
import { rootAPI } from "../../api";

jest.mock("axios");
afterEach(() => jest.resetAllMocks());

describe("Users view", () => {
  it("displays loading indicator", () => {
    const { getByText } = render(<Users />);

    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it("displays user data", async () => {
    axios.get.mockResolvedValue({ data: [{ name: "Kuba", age: 25 }] });
    const { getAllByText } = render(<Users />);

    const userInfo = await waitForElement(() => getAllByText(/Kuba/i));

    expect(userInfo).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(rootAPI);
  });
});
