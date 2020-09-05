import { game } from '../constants'

const initialState = {
    game: null,
    player: null,
    monster: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case game.SET_START_GAME:
            return {...state, game: {...action.game}};
        case game.SET_FETCH_PLAYER:
            return {...state, player: {...action.player, image: null}};
        case game.SET_FETCH_MONSTER:
            return {...state, monster: {...action.monster}};
        case game.SET_FETCH_CARDS:
            return {...state, player: {...state.player, cards: action.cards}};
        default:
            return {...state };
    }
}
