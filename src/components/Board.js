import React from "react";

const Board = (props) => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-three-quarters">
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
                                                <p className="title">Enemy</p>
                                                <p className="subtitle">HP: 32/40</p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="column is-5">
                                    <div className="box" style={{height: '100%'}}>
                                        <p className="title">Shield</p>
                                        <p className="subtitle">0</p>
                                    </div>
                                </div>
                            </div>
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
                                                <p className="title">Player</p>
                                                <p className="subtitle">HP: 16/48</p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="column is-5">
                                    <div className="box" style={{height: '100%'}}>
                                        <p className="title">Shield</p>
                                        <p className="subtitle">0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-mobile">
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
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <article className="message" style={{
                                height: '100%',
                                display: 'flex',
                                flexFlow: 'column'
                            }}>
                                <div className="message-header">
                                    <p className="has-text-centered is-size-3" style={{width: '100%'}}>TURNS</p>
                                </div>
                                <div className="message-body" style={{
                                    flex: '1 1 auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <div className="content">
                                        <p className="subtitle">CURRENT</p>
                                        <p className="title is-size-1">12</p>
                                    </div>
                                    <div className="content">
                                        <p className="subtitle">PAST</p>
                                        <p className="title is-size-1">11</p>
                                    </div>
                                    <div className="content">
                                        <p className="subtitle">LEFT</p>
                                        <p className="title is-size-1">8</p>
                                    </div>
                                    <div className="content">
                                        <button className="button is-primary is-fullwidth is-medium">END TURN</button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Board;
