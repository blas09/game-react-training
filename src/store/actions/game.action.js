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

const setStartGame = (createdGame) => {
    return { type: game.SET_START_GAME, game: createdGame }
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

const setFetchPlayer = (player) => {
    return { type: game.SET_FETCH_PLAYER, player }
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

const setFetchMonster = (monster) => {
    return { type: game.SET_FETCH_MONSTER, monster }
}

export default {
    startGame,
    fetchPlayer,
    fetchMonster,
}
