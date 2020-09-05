import React from "react";
import Loader from "../../../Loader";

const UserPanel = ({user}) => {
    const userData = !user
        ? <Loader />
        :   <>
                <p className="is-size-3 has-text-weight-semibold">{user.name}</p>
                <p className="is-size-5">{`HP: ${user.hp}/${user.maxHp}`}</p>
            </>;

    const userShield = !user
        ? <Loader />
        :   <>
                <p className="is-size-3 has-text-weight-semibold">Shield</p>
                <p className="is-size-5">{user.shield}</p>
            </>;

    const userImage = !user || !user.image
        ? 'https://bulma.io/images/placeholders/128x128.png'
        : user.image;

    return (
        <div className="columns is-mobile">
            <div className="column is-7">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-128x128" style={{overflow:'hidden'}}>
                                <img src={userImage} alt="" />
                            </figure>
                        </div>
                        <div className="media-content">{userData}</div>
                    </article>
                </div>
            </div>
            <div className="column is-5">
                <div className="box" style={{height: '100%'}}>
                    <article className="media">
                        <div className="media-content">{userShield}</div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default UserPanel;
