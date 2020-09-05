import React from "react";
import Loader from "../../../Loader";

const Card = ({card}) => {
    return (
        <div className="column is-one-third">
            {
                null === card
                    ?   <Loader />
                    :   <div className="card">
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
