import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialCard from "./TestimonialCard";

describe("Testimonials", () => {
    test("renders the Testimonials section", () => {
        render(<TestimonialCard />);
        const testimonialsContent = screen.getByTestId("testimonial-card");
        expect(testimonialsContent).toBeInTheDocument();
        }
    )

    test("renders the Testimonials components", () => {
        const sampleData = {
            author: "John Doe",
            description: "This is a sample testimonial.",
            image: "profile-picture.jpg",
            rating: 4,
        };
        render(<TestimonialCard
            author={sampleData.author}
            description={sampleData.description}
            image={sampleData.image}
            rating={sampleData.rating} 
            />
        );
        
        const author = screen.getByText(sampleData.author);
        const description = screen.getByText(sampleData.description);
        const image = screen.getByAltText("author");
        const rating = screen.getAllByAltText("star");

        expect(author).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(rating.length).toBe(sampleData.rating);
        }
    )


});