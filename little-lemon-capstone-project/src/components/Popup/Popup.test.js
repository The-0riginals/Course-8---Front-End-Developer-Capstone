import React from "react";
import { screen, render } from "@testing-library/react";
import Popup from "./Popup";

// mock the Button component
//jest.mock("../Button/Button", () => () => <div data-testid="Button"></div>);

// Mock the Button component with an accessible name
jest.mock("../Button/Button", () => ({ onClick }) => (
    <div data-testid="Button" onClick={onClick} role="button" aria-label="Close" />
));
//By adding the aria-label="Close" attribute to the mocked Button component, we ensure that the button will be recognized 
//with the expected accessible name when using the getByRole query with the name option.







describe("Popup", () => {
    const sampleData = {
        title: "Sample Popup Title",
        message: "This is a sample description for the popup component.",
    };

    test("renders Popup component", () => {
        render(<Popup />);
        expect(screen.getByTestId("popup-background")).toBeInTheDocument();
    });

    test("check button appears", () => {
        render(<Popup />);
        expect(screen.getByTestId("Button")).toBeInTheDocument();
    });

    test("render with sample data", () => {
        render(
          <Popup title={sampleData.title} message={sampleData.message} />
        );
        
        // Check if the title is rendered
        const titleElement = screen.getByText(sampleData.title);
        expect(titleElement).toBeInTheDocument();
        
        // Check if the description is rendered
        const descriptionElement = screen.getByText(sampleData.message);
        expect(descriptionElement).toBeInTheDocument();
        
        // Check if the Close button is rendered using getByRole
        const closeButton = screen.getByRole("button", { name: "Close" });
        expect(closeButton).toBeInTheDocument();
    });

    test("check if the onClose function is called when the button is clicked", () => {
        const onCloseMock = jest.fn();
        render(<Popup onClose={onCloseMock} />);
        const closeButton = screen.getByRole("button", { name: "Close" });
        closeButton.click();
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    test("check if the onClose handler when clicking outside the popup", () => {
        const onCloseMock = jest.fn();
        render(<Popup onClose={onCloseMock} />);
        const popupBackground = screen.getByTestId("popup-background");
        popupBackground.click();
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});

