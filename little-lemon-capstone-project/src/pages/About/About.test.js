import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

test("renders the About page", () => {
    render(<About />);
    const aboutContent = screen.getByText("About Us");
    expect(aboutContent).toBeInTheDocument();
    }
)

test("renders  about component", () => {
    render(<About />);
    const aboutContent = screen.getByTestId("about-us");
    expect(aboutContent).toBeInTheDocument();
    }
)