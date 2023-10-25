import React from 'react';
import '../styles/Tag.css';

function Tag({ text, color }) {
    const tagStyle = {
        backgroundColor: color,
        borderRadius: '8px', // Puedes ajustar el valor según tus preferencias
        display: 'inline-block', // Esto permite que los tags estén uno al lado del otro
        margin: '4px', // Espacio entre los tags
        padding: '4px 8px', // Espacio dentro del tag
    };

    return (
        <div className="tag" style={tagStyle}>
            {text}
        </div>
    )
}

export default Tag;
