import React from "react";
import Move from "./Move";

const Score = () => {
    return (
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
                    <Move title="CURRENT" value={12} />
                    <Move title="PAST" value={11} />
                    <Move title="LEFT" value={8} />
                    <div className="content">
                        <button className="button is-primary is-fullwidth is-medium">END TURN</button>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Score;
