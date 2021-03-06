import { game } from '../constants'

const initialState = {
    playerName: '',
    game: null,
    player: null,
    monster: null,
    fetchCards: false,
    selectedCard: null,
    monsterEffect: null,
    playingTurn: false,
    movesPast: 0,
    isHorrorEffectModalActive: false,
    numberOfCards: 0,
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
            return {...state, player: {...state.player, cards: action.cards}, fetchCards: false, numberOfCards: action.cards.length};
        case game.SET_SELECTED_CARD:
            return {...state, selectedCard: state.selectedCard !== action.selectedCard ? action.selectedCard : null};
        case game.SET_NEXT_TURN:
            return {
                ...state,
                game: {...state.game, ...action.payload.game},
                monsterEffect: action.payload.monsterEffect,
                playingTurn: false,
                movesPast: action.payload.movePast ? state.movesPast + 1: state.movesPast,
                selectedCard: null,
            };
        case game.SET_PLAYING_TURN:
            return {...state, playingTurn: action.playingTurn};
        case game.SET_HORROR_EFFECT_MODAL_ACTIVE:
            return {...state, isHorrorEffectModalActive: action.state};
        case game.SET_NEW_GAME:
            return {...initialState, playerName: state.playerName};
        case game.SET_PLAYER_NAME:
            return {...state, playerName: action.playerName};
        default:
            return {...state };
    }
}
