import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

test("renders Footer component with correct content", () => {
  render(
    <Router>
        <Footer />
    </Router>
  );

  // Check for the logo
  const logoElement = screen.getByAltText("logo-footer");
  expect(logoElement).toBeInTheDocument();

  // Check for site map links
  const siteMapLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Menu', link: '/menu' },
    { name: 'Reserve', link: '/reserve' }
  ];

  siteMapLinks.forEach(link => {
    const linkElement = screen.getByText(link.name);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", link.link);
  });

  // Check for contact information
  const contactInfo = screen.getAllByText(
    /123-456-7890|little.lemon@lemon.com/
  );
  expect(contactInfo).toHaveLength(2);

  // Check for social links
  const socialLinks = [
    { name: 'Facebook', link: 'https://www.facebook.com/' },
    { name: 'Instagram', link: 'https://www.instagram.com/' },
    { name: 'Twitter', link: 'https://www.twitter.com/' }
  ];

  socialLinks.forEach(link => {
    const linkElement = screen.getByText(link.name);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", link.link);
    expect(linkElement).toHaveAttribute("target", "_blank");
  });
});
