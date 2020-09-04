import React from "react";
import CardPanel from "./CardPanel/CardPanel";
import UserPanel from "./UserPanel/UserPanel";
import {useSelector} from "react-redux";

const GamePanel = () => {
    const player = useSelector(state => state.game.player);
    const enemy = useSelector(state => state.game.enemy);

    return (
        <div className="column is-three-quarters">
            <UserPanel user={enemy} />
            <UserPanel user={player} />
            <CardPanel />
        </div>
    );
}

export default GamePanel;
