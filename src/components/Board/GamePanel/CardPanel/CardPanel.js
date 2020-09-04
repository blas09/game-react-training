import React from "react";
import Card from "./Card";

const CardPanel = () => {
    return (
        <div className="columns is-mobile">
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardPanel;
