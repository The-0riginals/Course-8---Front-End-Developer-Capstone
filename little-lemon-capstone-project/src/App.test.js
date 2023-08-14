import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import userEvent from "@testing-library/user-event"; // Import userEvent

test("renders the app and navigates to Home by default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>
  );

  // Output the current state of the rendered component tree
  console.log(screen.debug());

  // Attempt to target an element within the Home component using different queries
  const homeContent = screen.getByText("Specials");
  expect(homeContent).toBeInTheDocument();
});

test("renders the About page", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <About />
    </MemoryRouter>
  );

  const aboutContent = screen.getByText("About Us");
  expect(aboutContent).toBeInTheDocument();
});

test("renders and submits the contact form", async () => { // Mark the test function as async
  render(<Contact />);

  // Select form fields
  const firstNameInput = screen.getByPlaceholderText("First name");
  const lastNameInput = screen.getByPlaceholderText("Last name");
  const emailInput = screen.getByPlaceholderText("Email address");
  // const passwordInput = screen.getByPlaceholderText("Password");
  const roleSelect = screen.getByLabelText("Role *");
  const messageTextarea = screen.getByLabelText("Message: *");
  const submitButton = screen.getByRole("button", { name: /send message/i });

  // Fill in form fields
  userEvent.type(firstNameInput, "John");
  userEvent.type(lastNameInput, "Doe");
  userEvent.type(emailInput, "john@example.com");
  // userEvent.type(passwordInput, "securepassword");
  fireEvent.change(roleSelect, { target: { value: "customer" } });
  userEvent.type(messageTextarea, "This is a test message.");

  // Submit the form
  userEvent.click(submitButton);

  // Wait for the success message to appear
  await waitFor(() => {
    expect(screen.getByText("Form submitted!")).toBeInTheDocument();
  });
});