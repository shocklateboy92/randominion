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
    box: number;
    column: number;
    row: number;
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
            <InfoProp name='Box'>{props.box}</InfoProp>
            <InfoProp name='Col'>{props.column}</InfoProp>
            <InfoProp name='Row'>{props.row}</InfoProp>
        </div>
        <img src={props.card.imageUrl} />
    </div>
);

export const CardDisplay = connect(
    (state: IRootState, ownProps: { uiIndex: number }) => ({
        card: getCardAt(state, ownProps.uiIndex),
        isLocked: getLockedCards(state).has(ownProps.uiIndex),
        box:
            Math.floor(
                state.cardsList.currentCards.present[ownProps.uiIndex] / 210
            ) + 1,
        column:
            Math.floor(
                (state.cardsList.currentCards.present[ownProps.uiIndex] % 210) /
                    30
            ) + 1,
        row: (state.cardsList.currentCards.present[ownProps.uiIndex] % 30) + 1
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
