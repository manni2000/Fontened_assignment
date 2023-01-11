import React from 'react';

function Modal({ card, hideModal, addHistory }) {
    const handleClose = () => {
        hideModal();
    }

    const handlePlay = () => {
        addHistory(card);
    }

    return (
        <div>
            <div>
                <iframe src={card.link} />
            </div>
            <button onClick={handleClose}>Close</button>
            <button onClick={handlePlay}>Play</button>
        </div>
    );
}

export default Modal;
