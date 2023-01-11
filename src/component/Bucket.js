import React, { useState } from 'react';
import Card from './Card';

function Bucket({ bucket, cards, deleteCard, moveCard, showModal }) {
  const [newCardName, setNewCardName] = useState('');
  const [newCardLink, setNewCardLink] = useState('');

  const handleAddCard = () => {
    addCard({ name: newCardName, link: newCardLink, bucketId: bucket.id });
    setNewCardName('');
    setNewCardLink('');
  }

  return (
    <div>
      <h3>{bucket.name}</h3>
      <div>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            deleteCard={deleteCard}
            editCard={editCard}
            moveCard={moveCard}
            showModal={showModal}
          />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newCardName}
          onChange={e => setNewCardName(e.target.value)}
        />
        <input
          type="text"
          value={newCardLink}
          onChange = { e => setNewCardLink(e.target.value)}
                                      />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
    </div>
  );
}

export default Bucket;
