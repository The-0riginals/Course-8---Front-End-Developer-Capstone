import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import menu from "../../components/data";

// Mock the section components
// add mock data
jest.mock("../../components/FoodCard/Card", () => () => <div data-testid="card-section"></div>);
// jest.mock("../../components/data", () => () => <div data-testid="data-section"></div>); 
// => this is not a module but an actual array of menu items. 
describe("Menu component", () => {
    test("renders the correct number of Card components", () => {
        render(<Menu />);
        const cardSections = screen.getAllByTestId("card-section"); // we use getAllByTestId because there are multiple cards

        // Since you're using a mock, there will be one "card-section" for each menu item
        expect(cardSections.length).toBe(menu.length -3 ); // -3 because there are 3 dishes in special section which is not in Menu section (page)
      });

    test("renders the Appetizers, Main, and Dessert categories", () => {
        render(<Menu />);
        const appetizerCategory = screen.getByText("Appetizers");
        const mainCategory = screen.getByText("Main");
        const dessertCategory = screen.getByText("Dessert");

        expect(appetizerCategory).toBeInTheDocument();
        expect(mainCategory).toBeInTheDocument();
        expect(dessertCategory).toBeInTheDocument();
      });
});