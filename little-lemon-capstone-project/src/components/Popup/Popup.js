import React from "react";
import "./Popup.css";
import Button from "../Button/Button";

const Popup = ({ title, message, onClose }) => {
    return (
        <> {/*/ this is a fragment, it is used to wrap multiple elements*/}
            <div data-testid="popup-background" className="Popup-background" onClick={onClose}></div>
            <div className="Popup">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="Popup-button-container">
                    <Button title="Close" onClick={onClose} />
                </div>
            </div>
        </>
    );
}

export default Popup;
