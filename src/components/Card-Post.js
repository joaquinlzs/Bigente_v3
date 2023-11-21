import React, { useState } from 'react';

function Card({ title, subreddit, selftext, score, permalink, created, thumbnail }) {
    const [flipped, setFlipped] = useState(false);
    const flipCard = () => {
        setFlipped(!flipped);
    };

    return (
        <div className='card-post'>

            <div className='header'>
                <div className='tag-block'></div>
                <div className='tag-label'>Litio</div>
                <div clasName='flipIcon'></div>

            </div>

            <div 
                className={`front ${flipped ? 'hidden' : ''}`} 
                onClick={flipCard}>
                <div className='title'>
                    {title}
                </div>
                <div className='author'>
                    {subreddit}
                </div>
            </div>

            <div className={`reverse ${flipped ? '' : 'hidden'}`}>
                {selftext}
            </div>

            <div className='footer'>
                <div className='date'>
                    {created} [{score}]
                </div>
            </div>

        </div>
    )
};