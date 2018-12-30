import * as React from 'react';
import { Card } from 'src/cards';
import CardDisplay from 'src/components/card-display';

import '../styles/cards-list.scss';

interface CardsListProps {
    cardsToDisplay: Card[];
}

export const CardsList: React.SFC<CardsListProps> = props => (
    <div className="cards-list">
        {props.cardsToDisplay.map(card => (
            <CardDisplay
                key={card.name}
                card={card}
                imageUrl={/* TODO: Figure this out */ undefined}
            />
        ))}
    </div>
);

export default CardsList;
