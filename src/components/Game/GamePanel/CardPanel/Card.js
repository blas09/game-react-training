import React from "react";

const Card = () => {
    return (
        <div className="column is-one-third">
            <div className="box">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png"
                                 alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content"><strong>Card</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
