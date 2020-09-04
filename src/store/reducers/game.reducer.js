import { game } from '../constants'

const initialState = {
    game: null,
    player: {
        name: '',
        hp: game.MAX_HP,
        maxHp: game.MAX_HP,
        shield: 0,
    },
    enemy: {
        name: 'Enemy',
        hp: game.MAX_HP,
        maxHp: game.MAX_HP,
        shield: 0,
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case game.SET_START_GAME:
            return { ...state, player: {...state.player, name: action.playerName}, game: {...action.game} }
        default:
            return { ...state }
    }
}
