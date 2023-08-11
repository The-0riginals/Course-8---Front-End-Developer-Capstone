import react from 'react';

import './Button.css';

const Button = ({ title, onClick, type }) => {
    const handleClick = (e) => {
        if (type !=="submit") {
            e.preventDefault(); // this is to prevent the page from refreshing
        }

        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            type={type}
            className="button"
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

export default Button;
