import * as React from 'react';
import { Card, AllCards } from 'src/cards';
import CardDisplay from 'src/components/card-display';

import '../styles/cards-list.scss';
import { connect } from 'react-redux';
import { IRootState } from 'src/reducers';

interface CardsListProps {
    cardsToDisplay: Card[];
}

const CardsListComponent: React.SFC<CardsListProps> = props => (
    <div className='cards-list'>
        {props.cardsToDisplay.map((card, index) => (
            <CardDisplay key={index} uiIndex={index} />
        ))}
    </div>
);

const CardsList = connect((state: IRootState) => ({
    cardsToDisplay: state.currentCards.map(index => AllCards[index])
}))(CardsListComponent);

export default CardsList;
