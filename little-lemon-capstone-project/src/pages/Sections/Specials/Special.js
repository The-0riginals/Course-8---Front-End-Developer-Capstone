import React from "react";
import "./Special.css";
import FoodCard from "../../../components/FoodCardSpecial/FoodCard";
import Data from "../../../components/data";

const Specials = () => {
    return (
        <div className="specials">
            <div className="header-container">
                <h1 className="specials-title" >Specials</h1>
            </div>
            <div className="header-list">
                {Data.map((item) => {
                    return item.type === "special" ? (<FoodCard data={item} key={item.id} />) : null;
                })}
            </div>
        </div>
    );
};

export default Specials;


