import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {game as gameActions} from '../store/actions';
import {Redirect} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();

    const game = useSelector(state => state.game.game);
    const playerName = useSelector(state => state.game.playerName);

    const [isButtonDisabled, setButtonDisabled] = useState(playerName === '');

    if (game) {
        return <Redirect to='/game' />
    }

    const changeNameHandler = (event) => {
        dispatch(gameActions.setPlayerName(event.target.value));
        setButtonDisabled(event.target.value.trim() === '');
    }

    const startGameHandler = () => {
        dispatch(gameActions.startGame(playerName));
        setButtonDisabled(true);
    }

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">

                    <h1 className="title">Welcome</h1>
                    <h2 className="subtitle">What's your name?</h2>
                    <br />

                    <div className="columns is-mobile mb-0">
                        <div className="column is-one-third is-offset-one-third">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="NAME" onChange={changeNameHandler} value={playerName} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns is-mobile">
                        <div className="column is-one-third is-offset-one-third">
                            <button className="button is-primary is-fullwidth" onClick={startGameHandler} disabled={isButtonDisabled}>LET'S PLAY</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Login;
