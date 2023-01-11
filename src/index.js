import React, { useState } from 'react';
import { render } from 'react-dom';
import { Card, Bucket, Modal, History } from './components';

function App() {
    const [cards, setCards] = useState([]);
    const [buckets, setBuckets] = useState([]);
    const [history, setHistory] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const addCard = (card) => {
        setCards([...cards, card]);
    }

    const deleteCard = (card) => {
        setCards(cards.filter(c => c.id !== card.id));
    }

    const editCard = (card) => {
        setCards(cards.map(c => c.id === card.id ? card : c));
    }

    const addBucket = (bucket) => {
        setBuckets([...buckets, bucket]);
    }

    const deleteBucket = (bucket) => {
        setBuckets(buckets.filter(b => b.id !== bucket.id));
    }

    const moveCard = (card, fromBucket, toBucket) => {
        deleteCardFromBucket(fromBucket, card);
        addCardToBucket(toBucket, card);
    }

    const showModal = (card) => {
        setSelectedCard(card);
    }

    const hideModal = () => {
        setSelectedCard(null);
    }

    const addHistory = (card) => {
        setHistory([...history, { card, time: Date.now() }]);
    }

    return (
        <div>
            <h1>My Card Application</h1>
            <div>
                <h2>Buckets</h2>
                {buckets.map(bucket => (
                    <Bucket
                        key={bucket.id}
                        bucket={bucket}
                        cards={cards.filter(card => card.bucketId === bucket.id)}
                        deleteCard={deleteCard}
                        moveCard={moveCard}
                        showModal={showModal}
                    />
                ))}
            </div>
            <div>
                <h2>History</h2>
                <History history={history} />
            </div>
            {selectedCard && (
                <Modal
                    card={selectedCard}
                    hideModal={hideModal}
                    addHistory={addHistory}
                />
            )}
        </div>
    );
}

render(<App />, document.getElementById('root'));
