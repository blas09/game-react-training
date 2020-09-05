import React from "react";
import Loader from "../../../Loader";

const Card = ({card, selectedCardId, select}) => {
    const getCardColor = () => {
        switch (card.effect) {
            case 'HEAL':
                return 'lightgreen';
            case 'DAMAGE':
                return 'lightcoral';
            case 'SHIELD':
                return 'lightblue';
            default:
                return 'white';
        }
    }

    let style = {cursor: 'pointer'};
    if (card && card.id === selectedCardId) {
        style = {...style, backgroundColor: getCardColor()};
    }

    const clickHandler = () => {
        select(card.id);
    }

    return (
        <div className="column is-one-third">
            {
                null === card
                    ?   <Loader />
                    :   <div className="card" style={style} onClick={clickHandler}>
                            <div className="card-image">
                                <div className="content is-size-1">
                                    <strong>{card.value}</strong>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="content is-size-3">{card.effect}</div>
                            </div>
                        </div>
            }
        </div>
    );
}

export default Card;
