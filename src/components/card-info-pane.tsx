import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from 'src/cards';
import { IRootState } from 'src/reducers';
import { getCurrentlySelectedCard } from 'src/selectors/card-info-pane.selectors';
import { getCardAt } from 'src/selectors/cards-list.selector';
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

export const CardInfoPane = connect((state: IRootState) => ({
    card: getCardAt(state, getCurrentlySelectedCard(state))
}))(Component);

export default CardInfoPane;
