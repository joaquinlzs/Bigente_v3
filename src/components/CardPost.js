import React, { useState } from 'react';
import '../styles/CardPost.css';
import getCardSize from '../utility/cardSize';

function CardPost({ title, subreddit, selftext, score, permalink, created, thumbnail }) {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!flipped);

    };

    return (
        <div className={`postCard ${flipped ? 'flipped' : ''} ${getCardSize(score)}`} onClick={flipCard}>

            <div className={`front ${flipped ? 'hidden' : ''}`}>
                <div className='title'>
                    {title}
                </div>
            </div>

            <div className={`reverse ${flipped ? '' : 'hidden'}`}>
                <div className='data'>
                    Pubblicado en {subreddit} hace {created}. Tiene un puntaje de {score}.
                </div>
            </div>

        </div>
    )
};

export default CardPost;