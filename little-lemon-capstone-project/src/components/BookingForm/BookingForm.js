import React, { useState } from "react";
import { validateEmail } from "../../utils/validationSchemas";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

const BookingForm = ({
    onFormSubmit,
    isFormSubmitted,
    availableTimes,
    dispatchOnDateChange, // This function is used to update the availableTimes
                        // availableTimes is a list of available times for the selected date
}) => {
    const defaultTime = availableTimes[0];

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        date:"",
        time: defaultTime,
        numberOfPeople: 0,
        occasion: "",
    });

    const handleInputChange = (e) => {
        if (e.target.name === "date") {
            dispatchOnDateChange(e.target.value);
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const minGuests = 1;
    const maxGuests = 10;

    return (
        <form onSubmit={(e) => onFormSubmit(e, formData)}> {/* onFormSubmit is a function that check if form is valid */} 
            <div className="Reservation-container">
                <label htmlFor="firstName" className="containter-item-title">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className={isFormSubmitted && !formData.firstName ? "error" : ""}
                />
            </div>
            <div className="Reservation-container">
                <label htmlFor="lastName" className="containter-item-title">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                />
            </div>
            <div className="Reservation-container">
                <label htmlFor="email" className="containter-item-title">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className={isFormSubmitted && !validateEmail(formData.email) ? "error" : ""} // !validateEmail(formData.email) is true when email is invalid
                />
            </div>

            <div className="Reservation-container">
                <label htmlFor="date" className="containter-item-title">Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className={isFormSubmitted && !formData.date ? "error" : ""}
                />
            </div>

            <div className="Reservation-container">
                <label htmlFor="time" className="containter-item-title">Time</label>
                <select
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className={isFormSubmitted && !formData.time ? "error" : ""}
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>

            <div className="Reservation-container">
                <label htmlFor="numberOfPeople" className="containter-item-title">
                    Number of People
                </label>
                <input
                    type="number"
                    name="numberOfPeople"
                    id="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleInputChange}
                    min={minGuests}
                    max={maxGuests}
                    required
                    className={isFormSubmitted && !formData.numberOfPeople ? "error" : ""}
                />
            </div>

            <div className="Reservation-container">
                <label htmlFor="occasion" className="containter-item-title">Occasion</label>
                <select
                    name="occasion"
                    id="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    required
                    className={isFormSubmitted && !formData.occasion ? "error" : ""}
                >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business</option>
                    <option value="date">Date</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="reservation-button">
                <Button title="Book a table" type="submit" />
            </div>
        </form>
    );
};

export default BookingForm;





