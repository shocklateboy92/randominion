import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { AllActions } from 'src/actions';
import { AllCards, Card } from 'src/cards';
import { IRootState } from 'src/reducers';

const Component: React.FunctionComponent<{
    card: Card;
    isLocked: boolean;
    toggleLock: () => void;
}> = props => (
    <div
        className={classNames('card float', { locked: props.isLocked })}
        onClick={props.toggleLock}
    >
        <div className='info-block'>{props.card.name}</div>
        <img src={'http://wiki.dominionstrategy.com/images/2/26/Archive.jpg'} />
    </div>
);

export const CardDisplay = connect(
    (state: IRootState, ownProps: { uiIndex: number }) => ({
        card: AllCards[state.currentCards[ownProps.uiIndex]],
        isLocked: state.lockedCards.has(ownProps.uiIndex)
    }),
    (dispatch, ownProps) => ({
        toggleLock() {
            dispatch(AllActions.toggleLock(ownProps.uiIndex));
        }
    })
)(Component);

export default CardDisplay;
