import React, { useState } from 'react';
import '../styles/CardPost.css';
import getCardSize from '../utility/cardSize';
import milisegundosPasados from '../utility/milisegundosPasados';
import fechaTexto from '../utility/fechaTexto';

function CardPost({ title, subreddit, selftext, score, permalink, created, thumbnail }) {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!flipped);

    };

    return (
        <div className={`postCard ${flipped ? 'flipped' : ''} ${getCardSize(score)}`} >

            <div className={`front ${flipped ? 'hidden' : ''}`}>
                <div className='title'>
                    <a href={`https://www.reddit.com${permalink}`} target="blank">
                        {title}
                    </a>
                </div>
                
            </div>

            <div className={`reverse ${flipped ? '' : 'hidden'}`}>
                <div className='data'>
                    Publicado en {subreddit} hace {fechaTexto(milisegundosPasados(created))} vía Reddit. <br />
                    Puntaje: {score}.
                </div>
            </div>
            <div className="flipButton" onClick={flipCard}>
                <i class="fa-solid fa-retweet"></i>
            </div>
        </div>
    )
};

export default CardPost;