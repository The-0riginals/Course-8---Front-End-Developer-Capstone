import React from "react";
import "./Popup.css";
import Button from "../Button/Button";

const Popup = ({ title, message, onClose }) => {
    return (
        <> {/*/ this is a fragment, it is used to wrap multiple elements*/}
            <div data-testid="popup-background" className="popup-background" onClick={onClose}></div>
            <div className="popup">
                <h2 className="popup-title">{title}</h2>
                <p className="popup-description">{message}</p>
                <div className="popup-button">
                    <Button title="Close" onClick={onClose} />
                </div>
            </div>
        </>
    );
}

export default Popup;
