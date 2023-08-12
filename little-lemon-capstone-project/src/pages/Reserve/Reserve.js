import React, { useState} from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./Reserve.css";
import Popup from "../../components/Popup/Popup";
import { useNavigate } from "react-router-dom";
import { useReducer} from "react";
import { fetchAPI } from "../../utils/Api";
import pages from "../../utils/pages";

const Reserve = () => {
    const navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));               // fetchAPI returns a list of available times for the selected date
        return response.length > 0 ? response : availableTimes; // if response is empty, return availableTimes
    };
    const initTimes = (initAvailableTimes) => [
        ...initAvailableTimes,
        ...fetchAPI(new Date()),
    ]
    const [availableTimes, dispatchOnDateChange] = useReducer( // https://reactjs.org/docs/hooks-reference.html#usereducer
        updateTimes, // reducer function
        [], // initial value (initAvailableTimes)
        initTimes // init function
    );

    const handleFormSubmit = (e, formData) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        const { lastName, ...rest } = formData; //https://stackoverflow.com/questions/58242778/check-all-value-of-object-except-one
        const areAllFieldsValid =  Object.values(rest).every((value) => value);  // object.values returns an array of values from an object 
                                                                                    //then we check if every value is truthy by using every(); it returns true if every value is truthy(not empty string, not null, not undefined, not 0, not false, not NaN)
                                                                                   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
        if (areAllFieldsValid) {
            setIsPopupOpen(true);
        }
    }

    return (
        <div className="reservation" data-testid="reservations-component">
            <div className="reservation-card">
                <h1 className="reservation-title"> Table Reservations</h1>
                <BookingForm
                    onFormSubmit={handleFormSubmit}
                    isFormSubmitted={isFormSubmitted}
                    availableTimes={availableTimes}
                    dispatchOnDateChange={dispatchOnDateChange}
                />
            </div>
            {isPopupOpen && (
                <Popup
                    title="Reservation completed"
                    message="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
                    onClose={() => {
                        setIsPopupOpen(false);
                        navigate(pages.get("home").path);
                    }}
                />
            )}
        </div>
    );
};

export default Reserve;
