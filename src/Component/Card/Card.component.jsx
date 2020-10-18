import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img src={'https://robohash.org/9?set=set2&size=180x180'} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)


