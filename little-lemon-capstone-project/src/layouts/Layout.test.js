import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

// Mock the section components
jest.mock("../components/Navbar-header/Navbar", () => () => <div data-testid="navbar"></div>);
jest.mock("../components/Footer/Footer", () => () => <div data-testid="footer"></div>);

describe("Layout component", () => {
    test("renders the Navbar and Footer components", () => {
      render(<Layout />);
  
        // Check that the sections are rendered
        const navbar = screen.getByTestId("navbar");
        const footer = screen.getByTestId("footer");
  
        expect(navbar).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });

    test("renders the children components", () => {
        render(
            <Layout>
                <div data-testid="child"></div>
            </Layout>
        );
    
          // Check that the sections are rendered
          const child = screen.getByTestId("child");
    
          expect(child).toBeInTheDocument();
    });

    test("renders the children content", () => {
        render(
            <Layout>
                <div>This is the content</div>
            </Layout>
        );
    
          // Check that the sections are rendered
          const content = screen.getByTestId("main-contents");

          expect(content).toBeInTheDocument();
          expect(content).toHaveTextContent("This is the content");
    });
});



