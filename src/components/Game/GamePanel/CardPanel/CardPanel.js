import React from "react";
import Card from "./Card";
import {useSelector} from "react-redux";

const CardPanel = () => {
    const player = useSelector(state => state.game.player);

    let cards = [null, null, null];
    if (null !== player && 'cards' in player) {
        cards = player.cards;
    }

    return (
        <div className="columns is-mobile">
            {cards.map((card, index) => <Card card={card} key={null !== card ? card.id : index} />)}
        </div>
    );
}

export default CardPanel;
