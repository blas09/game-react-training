import React, {useState} from "react";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {game as gameActions} from '../../../../store/actions';

const CardPanel = () => {
    const dispatch = useDispatch();

    const player = useSelector(state => state.game.player);
    const selectedCard = useSelector(state => state.game.selectedCard);

    const selectCardHandler = (selectedCard) => {
        dispatch(gameActions.setSelectedCard(selectedCard));
    };

    return (
        <div className="columns is-mobile is-multiline">
            {player && player.cards && player.cards.map((card, index) => {
                return (
                    <Card
                        card={card}
                        key={card ? card.id : index}
                        selectedCard={selectedCard}
                        select={(selectedCard) => selectCardHandler(selectedCard)}
                    />
                );
            })}
        </div>
    );
}

export default CardPanel;
