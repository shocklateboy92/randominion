import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { AllActions } from 'src/actions';
import { Card } from 'src/cards';
import { IRootState } from 'src/reducers';
import { getCardAt, getLockedCards } from 'src/selectors/cards-list.selector';

const InfoProp: React.SFC<{ name: string }> = props => (
    <>
        <span className='info-key'>{props.name}</span>
        <span className='info-value'>{props.children}</span>
    </>
);

const Component: React.FunctionComponent<{
    card: Card;
    isLocked: boolean;
    toggleLock: () => void;
    selectCard: () => void;
}> = props => (
    <div
        className={classNames('card float', { locked: props.isLocked })}
        onClick={props.toggleLock}
        onMouseEnter={props.selectCard}
    >
        {props.isLocked && (
            <div className='status'>
                <div>Locked</div>
            </div>
        )}
        <div className='info-block'>
            <InfoProp name='Row'>12</InfoProp>
            <InfoProp name='Col'>3</InfoProp>
        </div>
        <img src={props.card.imageUrl} />
    </div>
);

export const CardDisplay = connect(
    (state: IRootState, ownProps: { uiIndex: number }) => ({
        card: getCardAt(state, ownProps.uiIndex),
        isLocked: getLockedCards(state).has(ownProps.uiIndex)
    }),
    (dispatch, ownProps) => ({
        toggleLock() {
            dispatch(AllActions.toggleLock(ownProps.uiIndex));
        },
        selectCard() {
            dispatch(AllActions.selectCard(ownProps.uiIndex));
        }
    })
)(Component);

export default CardDisplay;
