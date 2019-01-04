import * as React from 'react';
import { Card, AllCards } from 'src/cards';
import { connect } from 'react-redux';
import { IRootState } from 'src/reducers';

import '../styles/card-info-pane.scss';

const Component: React.SFC<{ card?: Card }> = props => (
    <>
        {props.card && (
            <div className='card-info-pane'>
                <img src={props.card.imageUrl} />
            </div>
        )}
    </>
);

export const CardInfoPane = connect(
    ({ cardInfoPane, cardsList }: IRootState) => ({
        card: AllCards[cardsList.currentCards[cardInfoPane.currentIndex]]
    })
)(Component);

export default CardInfoPane;
