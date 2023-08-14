// add contact form
// Path: little-lemon-capstone-project\src\pages\Contact\Contact.js

// npm install @hookform/resolvers yup
//npm install react-hook-form

import React from "react";
import  { useState } from "react";
import { validateEmail } from "../../utils/validationSchemas";
import "./Contact.css";

// const PasswordErrorMessage = (e) => {
//     return (
//       <p className="FieldError">Password should have at least 8 characters</p>
//     )
// };
function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
      value: "",
      isTouched: false,
    });
    const [role, setRole] = useState("role");
    const [message, setMessage ] = useState(""); // Default value is empty string
  
    const getIsFormValid = () => {
      // Implement this function
      return (
        firstName &&
        validateEmail(email) &&
        //password.value.length >= 8 &&
         role !== 'role' &&
         message
      );
    };
  
    const clearForm = () => {
      // Implement this function
      
      setFirstName("");
      setLastName("");
      setEmail("");
    //   setPassword({
    //     value: "",
    //     isTouched: false,
    //   });
      setRole("role");
      setMessage("");
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted! testttttt");
      alert(" Form submited!");
      clearForm();
    };
  
    return (
      <div className="Contact">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Contact us</h2>
  
            <div className="Field">
              <label htmlFor="firstNameInput">
                First name <sup>*</sup> {/*sup is for superscript: requirement */}
              </label>
              <input
                id="firstNameInput"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>
  
            <div className="Field">
              <label>Last name</label>
              <input 
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last name" />
            </div>
  
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email address" />
            </div>
  
            {/* <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                type="password" // hide the password input
                value={password.value}
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value }); // ...password is a shallow copy of the password object
                }}
                onBlur={() => { // onBlur is when the user clicks outside of the input field
                  setPassword({ ...password, isTouched: true });
                }}
                placeholder="Password" 
              />
  
              {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
            </div> */}
  
            <div className="Field">
              <label htmlFor="roleSelect">
                Role <sup>*</sup>
              </label>
              <select 
                id="roleSelect"
                value={role}
                onChange={(e) => setRole(e.target.value)
              }>
                <option value="role">Role</option>
                <option value="customer">Customer</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div className="Field"> {/*Field for comment*/}
                <label htmlFor="message">
                    Message: <sup>*</sup>
                </label>
                <textarea
                id="message"
                placeholder="Please enter the Message"
                value={message}
                onChange={e => setMessage(e.target.value)} />
            </div>

            <button type="submit" disabled={!getIsFormValid()}>
              {/* {console.log(!getIsFormValid())} */}
              Send message
            </button>
          </fieldset>
        </form>
        <div aria-live="polite" role="status"> {/*aria-live is for screen readers- test purpose*/}
          {message && <p>Form submitted!</p>}
        </div>
      </div>
    );
  }

  export default Contact;
