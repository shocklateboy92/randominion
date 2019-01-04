import { CardIndex, getCardsToDisplay } from 'src/cards';
import { RootAction, AllActions } from 'src/actions';
import { getType } from 'typesafe-actions';
import { Set } from 'immutable';

export interface IRootState {
    currentCards: CardIndex[];
    lockedCards: Set<number>;
}

/**
 * A number that represents an index in the {@link IRootState#currentCards} array
 */
export type UiIndex = number;

export function rootReducer(
    state: IRootState | undefined,
    action: RootAction
): IRootState {
    if (!state) {
        // Return initial state
        return {
            currentCards: getCardsToDisplay(),
            lockedCards: Set()
        };
    }

    switch (action.type) {
        case getType(AllActions.randomize):
            return {
                ...state,
                // currentCards: getCardsToDisplay()
                currentCards: state.currentCards
                    .map(a => ({ sort: Math.random(), value: a }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(a => a.value)
            };
        case getType(AllActions.toggleLock):
            return {
                ...state,
                lockedCards: state.lockedCards.contains(action.payload)
                    ? state.lockedCards.remove(action.payload)
                    : state.lockedCards.add(action.payload)
            };
        default:
            return state;
    }
}
