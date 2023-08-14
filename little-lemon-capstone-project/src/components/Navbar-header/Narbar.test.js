import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

//add mock for Navbar

describe("Navbar component", () => {

    test("renders the Navbar component", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );

        // Check that the sections are rendered
        const navbarContent = screen.getByTestId("navbar");
        expect(navbarContent).toBeInTheDocument();

        // check that the logo is rendered
        const logo = screen.getByAltText("logo");
        expect(logo).toBeInTheDocument();

        // check that the menu-list is rendered
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Menu')).toBeInTheDocument();
        expect(screen.getByText('Reserve')).toBeInTheDocument();
        }
    );

    test("renders navigation links", () => {
        render(
          <Router>
            <Navbar />
          </Router>
        );
      
        // Check if each link is rendered
        const menuItems = [
          { id: 1, name: 'Home', link: '/' },
          { id: 2, name: 'About', link: '/about' },
          { id: 3, name: 'Contact', link: '/contact' },
          { id: 4, name: 'Menu', link: '/menu' },
          { id: 5, name: 'Reserve', link: '/reserve' }
        ];
      
        menuItems.forEach(item => {
          const linkElement = screen.getByText(item.name);
          expect(linkElement).toBeInTheDocument();
      
          // Check if link has the correct href attribute
          expect(linkElement).toHaveAttribute("href", item.link);
        });
    });
});

// run the test with npm test: npm test Navbar.test.js