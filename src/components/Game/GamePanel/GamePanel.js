import React, {useEffect} from "react";
import CardPanel from "./CardPanel/CardPanel";
import UserPanel from "./CardPanel/UserPanel";
import {useDispatch, useSelector} from "react-redux";
import {game as gameActions} from '../../../store/actions';

const GamePanel = () => {
    const dispatch = useDispatch();

    const game = useSelector(state => state.game.game);
    const player = useSelector(state => state.game.player);
    const monster = useSelector(state => state.game.monster);
    const fetchCards = useSelector(state => state.game.fetchCards);

    useEffect(() => {
        dispatch(gameActions.fetchPlayer(game.id));
        dispatch(gameActions.fetchMonster(game.id));
    }, [game]);

    useEffect(() => {
        if (fetchCards) {
            dispatch(gameActions.fetchCards(player.id));
        }
    }, [fetchCards]);

    return (
        <div className="column is-three-quarters">
            <UserPanel user={monster} />
            <UserPanel user={player} />
            <CardPanel />
        </div>
    );
}

export default GamePanel;
