import React from "react";
import { render, screen } from "@testing-library/react";
import Reserve from "./Reserve";
import { BrowserRouter as Router } from "react-router-dom";

test("renders the Reserve page", () => {
    render(
        <Router>
            <Reserve />
        </Router>
    );
    const reserveContent = screen.getByTestId("reservations-component");
    expect(reserveContent).toBeInTheDocument();
    }
);

//useNavigate() may be used only in the context of a <Router> component. -> need to import Router