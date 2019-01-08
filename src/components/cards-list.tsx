import * as React from 'react';
import { Card, OwnedKingdomCards } from 'src/cards';
import CardDisplay from 'src/components/card-display';
import FlipMove from 'react-flip-move';

import '../styles/cards-list.scss';
import { connect } from 'react-redux';
import { IRootState } from 'src/reducers';
import { getCurrentCards } from 'src/selectors/cards-list.selector';

interface CardsListProps {
    cardsToDisplay: Card[];
}

const CardsListComponent: React.SFC<CardsListProps> = props => (
    <div className='cards-list col'>
        <FlipMove typeName={null}>
            {props.cardsToDisplay.map((card, index) => (
                <CardDisplay key={card.name} uiIndex={index} />
            ))}
        </FlipMove>
    </div>
);

const CardsList = connect((state: IRootState) => ({
    cardsToDisplay: getCurrentCards(state).map(
        index => OwnedKingdomCards[index]
    )
}))(CardsListComponent);

export default CardsList;
