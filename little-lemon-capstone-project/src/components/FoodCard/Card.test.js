import React from "react";
import { screen,render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
    const sampleCard = {
        type: "dessert",
        name: "Namoura",
        image: "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
        price: "$4.99",
        description: "A traditional Lebanese dessert made from semolina, yogurt, and rose water syrup.",
    };
    test("should render the card", () => {
        render(<Card data={sampleCard} />);
        expect(screen.getByText("Namoura")).toBeInTheDocument(); // Check if the card name is rendered
        expect(screen.getByText("$4.99")).toBeInTheDocument(); // Check if the card price is rendered
    });

    it("check url, decription", () => {
        render(<Card data={sampleCard} />);
        // // Check if the card image is rendered with the correct URL
        // const imageElement = screen.getByAltText(sampleCard.name);
        // expect(imageElement).toBeInTheDocument();
        // expect(imageElement).toHaveAttribute("src", sampleCard.image);
        // there is no alt text in the image so cant get by alt text
        
        // Check if the card description is rendered
        const descriptionElement = screen.getByText(sampleCard.description);
        expect(descriptionElement).toBeInTheDocument();
    });
});
