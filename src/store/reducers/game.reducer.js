import { game } from '../constants'

const initialState = {
    game: null,
    player: null,
    monster: null,
    fetchCards: false,
    selectedCard: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case game.SET_START_GAME:
            return {...state, game: {...action.game}};
        case game.SET_FETCH_PLAYER:
            return {...state, player: {...action.player, image: null}, fetchCards: true};
        case game.SET_FETCH_MONSTER:
            return {...state, monster: {...action.monster}};
        case game.SET_FETCH_CARDS:
            return {...state, player: {...state.player, cards: action.cards}, fetchCards: false};
        case game.SET_SELECTED_CARD:
            return {...state, selectedCard: state.selectedCard !== action.selectedCard ? action.selectedCard : null};
        default:
            return {...state };
    }
}
