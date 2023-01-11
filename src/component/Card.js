import React, { useState } from 'react';

function Card({ card, deleteCard, editCard, showModal }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: card.name, link: card.link });

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleCancel = () => {
        setIsEditing(false);
    }

    const handleSave = () => {
        setIsEditing(false);
        editCard({ ...card, ...formData });
    }

    const handlePlay = () => {
        showModal(card);
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                        type="text"
                        value={formData.link}
                        onChange={e => setFormData({ ...formData, link: e.target.value })}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <div>
                    <span>{card.name}</span>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => deleteCard(card)}>Delete</button>
                    <button onClick={handlePlay}>Play</button>
                </div>
            )}
        </div>
    );
}

export default Card;
