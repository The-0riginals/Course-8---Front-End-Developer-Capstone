import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with correct title", () => {
    const title = "Click me";
    render(<Button title={title} />);
    const buttonElement = screen.getByText(title);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick prop when clicked", () => {
    const onClick = jest.fn();
    render(<Button title="Click me" onClick={onClick} />);
    fireEvent.click(screen.getByText(/click me/i)); // case insensitive regex, e.g. "Click me" or "CLICK ME"
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('prevents default form submission on button click when type is not "submit"', () => {
    const onSubmit = jest.fn();

    // type is not "submit"
    render(
      <form onSubmit={onSubmit}>
        <Button title="Click me" type= "button" />
      </form>
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});