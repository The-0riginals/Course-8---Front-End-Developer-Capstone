import React, { Component } from 'react';
import menu from "../../components/data";
import Card from '../../components/FoodCard/Card';
import "./Menu.css";
const Menu = () => {
    return (
        <>
            <section className="menu-container">
                <h1 className="menu-title" >Our Menu</h1>
                <div className="Categories">
                    <h2 className="h2-categories">Appetizers</h2>
                    <div className="special-body">
                        {menu.map((item, index) => {
                            return item.type === "appetizer" ? (<Card data={item} key={index} />) : null;
                        })}
                    </div>
                </div>

                <div className="Categories ">
                    <h2 className="h2-categories" >Main</h2>
                    <div className="special-body">
                        {menu.map((item, index) => {
                            return item.type === "main" ? (<Card data={item} key={index} />) : null;
                        })}
                    </div>
                </div>

                <div className="Categories">
                    <h2 className="h2-categories" >Dessert</h2>
                    <div className="special-body">
                        {menu.map((item, index) => {
                            return item.type === "dessert" ? (<Card data={item} key={index} />) : null;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;