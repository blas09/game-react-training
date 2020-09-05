import React, {useState} from "react";
import Card from "./Card";
import {useSelector} from "react-redux";

const CardPanel = () => {
    const player = useSelector(state => state.game.player);

    const [selectedCardId, setSelectedCardId] = useState(null);

    const selectCardHandler = (cardId) => {
        setSelectedCardId(cardId !== selectedCardId ? cardId : null);
    };

    return (
        <div className="columns is-mobile">
            {player && player.cards && player.cards.map((card, index) => {
                return (
                    <Card
                        card={card}
                        key={card ? card.id : index}
                        selectedCardId={selectedCardId}
                        select={(cardId) => selectCardHandler(cardId)}
                    />
                );
            })}
        </div>
    );
}

export default CardPanel;
