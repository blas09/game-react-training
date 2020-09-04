import React from "react";

const Move = (props) => {
    return (
        <div className="content">
            <p className="subtitle">{props.title}</p>
            <p className="title is-size-1">{props.value}</p>
        </div>
    );
}

export default Move;
