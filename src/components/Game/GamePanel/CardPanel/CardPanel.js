import React from "react";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {game as gameActions} from '../../../../store/actions';
import Modal from "../../../Modal";
import {game as gameConstants} from '../../../../store/constants';

const CardPanel = () => {
    const dispatch = useDispatch();

    const player = useSelector(state => state.game.player);
    const selectedCard = useSelector(state => state.game.selectedCard);
    const isHorrorEffectModalActive = useSelector(state => state.game.isHorrorEffectModalActive);
    const monsterEffect = useSelector(state => state.game.monsterEffect);

    const selectCardHandler = (selectedCard) => {
        if (monsterEffect && monsterEffect.effect === gameConstants.HORROR_EFFECT) {
            dispatch(gameActions.setHorrorEffectModal(true));
        } else {
            dispatch(gameActions.setSelectedCard(selectedCard));
        }
    };

    const closeHorrorEffectModalHandler = () => {
        dispatch(gameActions.setHorrorEffectModal(false));
    }

    return (
        <>
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
            <Modal active={isHorrorEffectModalActive} title="HORROR EFFECT!" closeModal={closeHorrorEffectModalHandler}>
                <p>The Monster has activated the <strong>Horror Effect</strong> which disables the player to select a card during this turn.</p>
            </Modal>
        </>
    );
}

export default CardPanel;
