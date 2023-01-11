import React from 'react';

function History({ history }) {
    return (
        <div>
            <ul>
                {history.map(entry => (
                    <li key={entry.time}>
                        <span>{entry.card.name}</span>
                        <span>{entry.card.link}</span>
                        <span>{new Date(entry.time).toString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default History;
