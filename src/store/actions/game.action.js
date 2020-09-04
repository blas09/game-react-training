import { game } from '../constants'

const setStartGame = (playerName) => {
    return { type: game.SET_START_GAME, playerName }
}

export default {
    setStartGame,
}
