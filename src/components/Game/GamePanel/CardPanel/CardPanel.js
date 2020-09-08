import React, {useEffect, useState} from "react";
import Card from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {game as gameActions} from '../../../../store/actions';
import Modal from "../../../Modal";
import {game as gameConstants} from '../../../../store/constants';
import {Redirect} from "react-router-dom";
import CardLoader from "./CardLoader";

const CardPanel = () => {
    const dispatch = useDispatch();

    const player = useSelector(state => state.game.player);
    const monster = useSelector(state => state.game.monster);
    const game = useSelector(state => state.game.game);
    const selectedCard = useSelector(state => state.game.selectedCard);
    const isHorrorEffectModalActive = useSelector(state => state.game.isHorrorEffectModalActive);
    const monsterEffect = useSelector(state => state.game.monsterEffect);
    const numberOfCards = useSelector(state => state.game.numberOfCards);

    console.log(player && player.cardas ? player.cards : 'hola');

    const [isWinModalActive, setWinModalActive] = useState(false);
    const [isLoseModalActive, setLoseModalActive] = useState(false);

    useEffect(() => {
        setWinModalActive(game.turnsLeft > 0 && (monster && monster.hp === 0));
        setLoseModalActive(game.turnsLeft === 0 || (player && player.hp === 0));
    }, [game, monster, player]);

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

    const closeEndGameModal = () => {
        dispatch(gameActions.setNewGame());
        return <Redirect to='/' />
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
                {(!player || !player.cards) && Array(numberOfCards).fill().map((card, index) => {
                    return (
                        <CardLoader />
                    );
                })}
            </div>
            <Modal active={isHorrorEffectModalActive} title="HORROR EFFECT!" closeModal={closeHorrorEffectModalHandler}>
                <p>The Monster has activated the <strong>Horror Effect</strong> which disables the player to select a card during this turn.</p>
            </Modal>
            <Modal active={isWinModalActive} title="CONGRATULATIONS!" closeModal={closeEndGameModal} closeText="Play new game">
                <p>You Win! (:</p>
            </Modal>
            <Modal active={isLoseModalActive} title="UPS!" closeModal={closeEndGameModal} closeText="Play new game">
                <p>You lose! :(</p>
            </Modal>
        </>
    );
}

export default CardPanel;
