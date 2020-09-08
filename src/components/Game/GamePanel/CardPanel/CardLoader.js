import React from "react";
import Loader from "../../../Loader";

const CardLoader = () => {
    return (
        <div className="column is-one-third">
            <div className="box" style={{cursor: 'pointer'}}>
                <article className="media">
                    <div className="media-content">
                        <p className="is-size-3 has-text-weight-semibold">Loading</p>
                        <p className="is-size-4">&nbsp;</p>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default CardLoader;
