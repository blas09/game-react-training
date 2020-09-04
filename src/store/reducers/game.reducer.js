import { game } from '../constants'

const initialState = {
    game: null,
    player: null,
    monster: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case game.SET_START_GAME:
            return { ...state, game: {...action.game}}
        default:
            return { ...state }
    }
}
