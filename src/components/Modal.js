import React from "react";

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
                {props.children}
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    );
}

export default Modal;
