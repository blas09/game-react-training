import React from "react";
import {useSelector} from "react-redux";
import Loader from "../../../Loader";

const Card = () => {
    const player = useSelector(state => state.game.player);

    const cardImage = null === player
        ? <Loader />
        :   <>
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
            </figure>
        </>;

    const cardValue = null === player
        ? <Loader />
        : <div className="content"><strong>Card</strong></div>;

    return (
        <div className="column is-one-third">
            <div className="box">
                <div className="card">
                    <div className="card-image">{cardImage}</div>
                    <div className="card-content">{cardValue}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
