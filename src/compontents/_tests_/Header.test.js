import React from "react";
import Header from "../Header/Header";
import { renderWithRouter } from "../../testUtils";
import { fireEvent } from "@testing-library/react";
import { LangContext } from "../../context";

describe("Header Component", () => {
  it("displays language controls", () => {
    const { getByText } = renderWithRouter(<Header />);

    expect(getByText(/^en/i)).toBeInTheDocument();
    expect(getByText(/^pl/i)).toBeInTheDocument();
  });

  it("displays default context values", () => {
    const { getByText } = renderWithRouter(<Header />);

    expect(getByText(/current lang: en/i)).toBeInTheDocument();
  });

  it("language control buttons calls proper func with proper args", () => {
    const mockedContext = {
      currentLang: "en",
      setLang: jest.fn(),
    };

    const { getByText } = renderWithRouter(
      <LangContext.Provider value={mockedContext}>
        <Header />
      </LangContext.Provider>
    );

    fireEvent.click(getByText("EN"));
    fireEvent.click(getByText("PL"));

    expect(mockedContext.setLang).toBeCalledTimes(2);
    expect(mockedContext.setLang).toBeCalledWith("en");
    expect(mockedContext.setLang).toBeCalledWith("pl");
  });
});
