import React from "react";
import { render, screen } from "@testing-library/react";
import Specials from "./Special";

// Mock the FoodCardSpecial component
jest.mock("../../../components/FoodCardSpecial/FoodCard", () => () => <div data-testid="food-card"></div>); 
// When using jest.mock with a function that returns a function, it's important to use the pattern () => () => <div />.

// Mock the data
jest.mock("../../../components/data", () => [
  {
    id: 1,
    type: "special",
    // ... other fields
  },
  
]);

test("renders Specials component without errors", () => {
  render(<Specials />);

  expect(screen.getByText("Specials")).toBeInTheDocument();

  // Check that the FoodCardSpecial component is rendered for each special item in the mock data
  const foodCards = screen.getAllByTestId("food-card");
  expect(foodCards.length).toBe(1); // Adjust the expected count based on your mock data
});
