import React from 'react';

const Login = () => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">

                    <h1 className="title">Welcome</h1>
                    <h2 className="subtitle">What's your name?</h2>
                    <br />

                    <div className="columns is-mobile mb-0">
                        <div className="column is-one-third is-offset-one-third">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="NAME" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns is-mobile">
                        <div className="column is-one-third is-offset-one-third">
                            <button className="button is-primary is-fullwidth">LET'S PLAY</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Login;
