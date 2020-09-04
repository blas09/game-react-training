import React from "react";
import Score from "./Score/Score";
import GamePanel from "./GamePanel/GamePanel";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Game = () => {
    const game = useSelector(state => state.game.game);

    if (null === game) {
        return <Redirect to='/' />
    }

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <GamePanel />
                        <Score />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Game;
