import React, {useEffect} from "react";
import CardPanel from "./CardPanel/CardPanel";
import UserPanel from "./UserPanel/UserPanel";
import {useSelector} from "react-redux";

const GamePanel = ({game}) => {
    const player = useSelector(state => state.game.player);
    const monster = useSelector(state => state.game.monster);

    return (
        <div className="column is-three-quarters">
            <UserPanel user={monster} />
            <UserPanel user={player} />
            <CardPanel />
        </div>
    );
}

export default GamePanel;
