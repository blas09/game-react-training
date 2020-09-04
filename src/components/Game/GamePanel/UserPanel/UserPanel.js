import React from "react";
import Loader from "../../../Loader";

const UserPanel = ({user}) => {
    const userData = null === user
        ? <Loader />
        :   <>
                <p className="title">{user.name}</p>
                <p className="subtitle">{`HP: ${user.hp}/${user.maxHp}`}</p>
            </>;

    const userShield = null === user
        ? <Loader />
        :   <>
                <p className="title">Shield</p>
                <p className="subtitle">{user.shield}</p>
            </>;

    const userImage = null === user
        ? <Loader />
        :   <>
                <figure className="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                </figure>
            </>;

    return (
        <div className="columns is-mobile">
            <div className="column is-7">
                <div className="box">
                    <article className="media">
                        <div className="media-left">{userImage}</div>
                        <div className="media-content">{userData}</div>
                    </article>
                </div>
            </div>
            <div className="column is-5">
                <div className="box" style={{height: '100%'}}>{userShield}</div>
            </div>
        </div>
    );
}

export default UserPanel;
