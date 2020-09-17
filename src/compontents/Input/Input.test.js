import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

const renderInput = (props) => {
  const utils = render(<Input name="Name" label="Label" {...props} />);
  const input = utils.getByLabelText(/label/i);
  return {
    ...utils,
    input,
  };
};

describe("Input Component", () => {
  it("Check placeholder", () => {
    const { input } = renderInput();
    expect(input).toBeInTheDocument();
  });

  it("Displays default placeholder", () => {
    let placeholderText = "Default placeholder value";
    const { getByPlaceholderText, rerender } = renderInput();
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();

    placeholderText = "Name";

    rerender(<Input label="New value" name="Name" placeholder={placeholderText} />);

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it("Display label value", () => {
    const { input } = renderInput();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, {
      target: {
        value: "kuba",
      },
    });

    expect(input).toHaveValue("kuba");
  });

  it("Display error when numbers are passed", () => {
    const { input, container } = renderInput();

    fireEvent.change(input, {
      target: {
        value: "Kuba",
      },
    });
    expect(container).not.toHaveTextContent(/error/i);

    fireEvent.change(input, {
      target: {
        value: "Kuba123",
      },
    });
    expect(container).toHaveTextContent(/error/i);

    fireEvent.change(input, {
      target: {
        value: "KubaKuba",
      },
    });
    expect(container).not.toHaveTextContent(/error/i);
  });
});
