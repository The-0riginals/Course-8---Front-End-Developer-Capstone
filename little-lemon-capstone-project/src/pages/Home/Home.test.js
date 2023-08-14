import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

// Mock the section components
// This is a function that returns a component that renders a div with a data-testid attribute
jest.mock("../Sections/Hero/Hero", () => () => <div data-testid="hero-section"></div>); 
jest.mock("../Sections/Specials/Special", () => () => <div data-testid="specials-section"></div>);
jest.mock("../Sections/Testimonials/Testimonials", () => () => <div data-testid="testimonials-section"></div>);

describe("Home component", () => {
    test("renders the Hero, Specials, Testimonials sections", () => {
      render(<Home />);

        // Check that the sections are rendered
        const heroSection = screen.getByTestId("hero-section");
        const specialsSection = screen.getByTestId("specials-section");
        const testimonialsSection = screen.getByTestId("testimonials-section");

        expect(heroSection).toBeInTheDocument();
        expect(specialsSection).toBeInTheDocument();
        expect(testimonialsSection).toBeInTheDocument();
    });
});
