import React from "react";
import Score from "./Score/Score";
import GamePanel from "./GamePanel/GamePanel";

const Board = (props) => {
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

export default Board;
