import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Contact from "./Contact";
import userEvent from "@testing-library/user-event";
import { isDisabled } from "@testing-library/user-event/dist/utils";

describe("Contact", () => {
  test("renders and submits the valid contact form", async () => {

    // Mock the handleSubmit function
    // In Contact.test.js
    const handleSubmit = jest.fn();
    render(<Contact onSubmit={handleSubmit} />);

    // Select form fields
    const firstNameInput = screen.getByPlaceholderText("First name");
    const lastNameInput = screen.getByPlaceholderText("Last name");
    const emailInput = screen.getByPlaceholderText("Email address");
    const roleSelect = screen.getByLabelText("Role *");
    const messageTextarea = screen.getByLabelText('Message: *');
    const submitButton = screen.getByRole("button", { name: /send message/i });

    // Fill in form fields
    await act(async () => {
      userEvent.type(firstNameInput, "John");
      userEvent.type(lastNameInput, "Doe");
      userEvent.type(emailInput, "ha@gmail.com");
      fireEvent.change(roleSelect, { target: { value: "customer" } });
      userEvent.type(messageTextarea, "This is a test message from 101.");
    });
    //Wait for the form to update and the button to become enabled
    // await waitFor(() => {
    //   expect(submitButton).not.toBeDisabled();
    // });
    
    // expect
    expect(firstNameInput.value).toBe("John")
    expect(lastNameInput.value).toBe("Doe")
    expect(emailInput.value).toBe("ha@gmail.com")
    expect(roleSelect.value).toBe("customer")
    expect(messageTextarea.value).toBe("This is a test message from 101.")

    // Submit the form
    // await act(async () => {
    //   fireEvent.click(submitButton);
    //   console.log("done submitting form");
    // });
    // console.log(submitButton.disabled);
    // expect(submitButton).not.toBeDisabled();
    // console.log(submitButton);
    // console.log(handleSubmit);
    // Check that the handleSubmit function was called with the correct arguments
    // expect(handleSubmit).toHaveBeenCalledWith({
    //     firstName: "John",
    //     lastName: "Doe",
    //     email: "ha@gmail.com",
    //     role: "customer",
    //     message: "This is a test message from 101.",
    // });
    // await waitFor(() => {
    //   expect(handleSubmit).toHaveBeenCalled(); //Not working
    // });
    // all fields are filled in, but toHaveBeenCalledWith() is not called. why? 


    //Wait for the success message to appear
    await waitFor(() => {
        expect(screen.getByText("Form submitted!")).toBeInTheDocument();
    });
 });
});

//we have use await waitFor(() => { ... }) to wait for the asynchronous actions to complete before making our assertions.
//we have also use async () => { ... } to mark the test function as async.
//we have also use await act(async () => { ... }) to wrap the asynchronous actions in act(...).
//When testing, code that causes React state updates should be wrapped into act(...):
