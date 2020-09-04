import React from "react";
import CardPanel from "./CardPanel/CardPanel";
import UserPanel from "./UserPanel/UserPanel";

const GamePanel = () => {
    const enemy = {
        name: 'Enemy',
        healthPoints: 32,
        maxHealthPoints: 40,
        shield: 0,
    };

    const player = {
        name: 'Player',
        healthPoints: 16,
        maxHealthPoints: 40,
        shield: 45,
    };

    return (
        <div className="column is-three-quarters">
            <UserPanel user={enemy} />
            <UserPanel user={player} />
            <CardPanel />
        </div>
    );
}

export default GamePanel;
