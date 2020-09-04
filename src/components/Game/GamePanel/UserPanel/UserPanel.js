import React from "react";

const UserPanel = ({user}) => {
    const hp = `HP: ${user.hp}/${user.maxHp}`;

    return (
        <div className="columns is-mobile">
            <div className="column is-7">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/128x128.png"
                                     alt="Image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title">{user.name}</p>
                            <p className="subtitle">{hp}</p>
                        </div>
                    </article>
                </div>
            </div>
            <div className="column is-5">
                <div className="box" style={{height: '100%'}}>
                    <p className="title">Shield</p>
                    <p className="subtitle">{user.shield}</p>
                </div>
            </div>
        </div>
    );
}

export default UserPanel;
