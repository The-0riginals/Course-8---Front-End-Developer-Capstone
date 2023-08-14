import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "./Testimonials";

// Mock the section components
jest.mock("../../../components/TestimonialCard/TestimonialCard", () => () => <div data-testid="testimonial-card"></div>);

test("renders the Testimonials section", () => {
    render(<Testimonials />);
    
    // Check that the TestimonialCard component is rendered for each testimonial item in the mock data
    const testimonialCards = screen.getAllByTestId("testimonial-card");
    expect(testimonialCards.length).toBe(3); // Adjust the expected count based on your mock data
    }
);

