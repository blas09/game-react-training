import { game } from '../constants'
import axios from 'axios';

const baseURL = process.env.REACT_APP_GAME_BACKEND_BASEURL;

const startGame = (playerName) => {
    return dispatch => {
        const startGameURL = `${baseURL}games`;

        axios
            .post(startGameURL, {name: playerName})
            .then(res => {
                dispatch(setStartGame(res.data));
            })
            .catch(error => console.log(error));
    };
}

const fetchPlayer = (gameId) => {
    return dispatch => {
        const fetchPlayerURL = `${baseURL}games/${gameId}/player`;

        axios
            .get(fetchPlayerURL)
            .then(res => {
                dispatch(setFetchPlayer(res.data));
            })
            .catch(error => console.log(error));
    };
}

const fetchMonster = (gameId) => {
    return dispatch => {
        const fetchPlayerURL = `${baseURL}games/${gameId}/monster`;

        axios
            .get(fetchPlayerURL)
            .then(res => {
                dispatch(setFetchMonster(res.data));
            })
            .catch(error => console.log(error));
    };
}

const fetchCards = (playerId) => {
    return dispatch => {
        const fetchPlayerURL = `${baseURL}players/${playerId}/cards`;

        axios
            .get(fetchPlayerURL)
            .then(res => {
                dispatch(setFetchCards(res.data));
            })
            .catch(error => console.log(error));
    };
}

const nextTurn = (gameId, selectedCard) => {
    return dispatch => {
        const nextTurnURL = `${baseURL}games/${gameId}/next-turn`;

        let params = {};
        if (selectedCard) {
            params = {card: selectedCard};
        }

        axios
            .post(nextTurnURL, params)
            .then(res => {
                res.data.movePast = !selectedCard;
                dispatch(setNextTurn(res.data));
            })
            .catch(error => console.log(error));
    };
}

const setFetchMonster = (monster) => {
    return { type: game.SET_FETCH_MONSTER, monster };
}

const setFetchPlayer = (player) => {
    return { type: game.SET_FETCH_PLAYER, player };
}

const setStartGame = (createdGame) => {
    return { type: game.SET_START_GAME, game: createdGame };
}

const setFetchCards = (cards) => {
    return { type: game.SET_FETCH_CARDS, cards: cards };
}

const setSelectedCard = (selectedCard) => {
    return { type: game.SET_SELECTED_CARD, selectedCard };
}

const setNextTurn = (payload) => {
    return { type: game.SET_NEXT_TURN, payload };
}

const setPlayingTurn = (playingTurn) => {
    return { type: game.SET_PLAYING_TURN, playingTurn };
}

const setHorrorEffectModal = (state) => {
    return { type: game.SET_HORROR_EFFECT_MODAL_ACTIVE, state };
}

export default {
    startGame,
    fetchPlayer,
    fetchMonster,
    fetchCards,
    setSelectedCard,
    nextTurn,
    setPlayingTurn,
    setHorrorEffectModal,
}
