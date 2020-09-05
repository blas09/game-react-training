import React from "react";
import Move from "./Move";
import {useDispatch, useSelector} from "react-redux";
import {game as gameActions} from '../../../store/actions';

const Score = () => {
    const dispatch = useDispatch();

    const game = useSelector(state => state.game.game);
    const selectedCard = useSelector(state => state.game.selectedCard);
    const playingTurn = useSelector(state => state.game.playingTurn);
    const movesPast = useSelector(state => state.game.movesPast);

    const buttonClickHandler = () => {
        dispatch(gameActions.setPlayingTurn(true));
        dispatch(gameActions.nextTurn(game.id, selectedCard));
    }

    return (
        <div className="column is-one-quarter">
            <article className="message" style={{
                height: '100%',
                display: 'flex',
                flexFlow: 'column'
            }}>
                <div className="message-header">
                    <p className="has-text-centered is-size-3" style={{width: '100%'}}>TURNS</p>
                </div>
                <div className="message-body" style={{
                    flex: '1 1 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Move title="CURRENT" value={game.currentTurn} />
                    <Move title="PAST" value={movesPast} />
                    <Move title="LEFT" value={game.turnsLeft} />
                    <div className="content">
                        <button
                            className="button is-primary is-fullwidth is-large"
                            onClick={buttonClickHandler}
                            disabled={playingTurn}
                        >END TURN</button>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Score;
