import React from "react";
import Loader from "../../../Loader";

const Card = ({card, selectedCard, select}) => {
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
    if (card && card.id === selectedCard) {
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
                    :   <div className="box" style={style} onClick={clickHandler}>
                            <article className="media">
                                <div className="media-content">
                                    <p className="is-size-3 has-text-weight-semibold">{card.effect}</p>
                                    <p className="is-size-4">{card.value}</p>
                                </div>
                            </article>
                        </div>
            }
        </div>
    );
}

export default Card;
