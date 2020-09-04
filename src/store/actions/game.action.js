import { game } from '../constants'
import axios from 'axios';

const startGame = (playerName) => {
    const baseURL = process.env.REACT_APP_GAME_BACKEND_BASEURL;

    return dispatch => {
        const startGameURL = `${baseURL}games`;

        axios
            .post(startGameURL, {name: playerName})
            .then(res => {
                const game = res.data;

                dispatch(setStartGame(playerName, game));
            })
            .catch(error => console.log(error));
    };
}

const setStartGame = (playerName, createdGame) => {
    return { type: game.SET_START_GAME, playerName, game: createdGame }
}

export default {
    startGame,
}
