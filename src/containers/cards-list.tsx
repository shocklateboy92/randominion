import * as React from 'react';
import { Card } from 'src/cards';
import { Dictionary } from 'src/models/dictionary';
import CardDisplay from 'src/components/card-display';

import '../styles/cards-list.scss';

interface ICardsListState {
    imageUrls: Dictionary<string>;
}

interface CardsListProps {
    cardsToDisplay: Card[];
}

export default class CardsList extends React.Component<
    CardsListProps,
    ICardsListState
> {
    constructor(props: CardsListProps) {
        super(props);

        this.state = { imageUrls: {} };
    }

    public render() {
        return (
            <div className="cards-list">
                {' '}
                {this.props.cardsToDisplay.map(card => (
                    <CardDisplay
                        key={card.name}
                        card={card}
                        imageUrl={this.state.imageUrls[card.name]}
                    />
                ))}
            </div>
        );
    }
}
