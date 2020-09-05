import React from "react";

const Modal = (props) => {
    let modalClasses = ['modal'];
    if (props.active) {
        modalClasses.push('is-active');
    }

    return (
        <div className={modalClasses.join(' ')}>
            <div className="modal-background" onClick={props.closeModal}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.title}</p>
                    <button className="delete" aria-label="close" onClick={props.closeModal}></button>
                </header>
                <section className="modal-card-body">
                    {props.children}
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={props.closeModal}>Close</button>
                </footer>
            </div>
        </div>
    );
}

export default Modal;
