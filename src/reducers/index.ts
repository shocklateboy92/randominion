import { CardIndex, getCardsToDisplay } from 'src/cards';
import { RootAction, AllActions } from 'src/actions';
import { getType } from 'typesafe-actions';

export interface IRootState {
    currentCards: CardIndex[];
    lockedCards: Set<UiIndex>;
}

/**
 * A number that represents an index in the {@link IRootState#currentCards} array
 */
export type UiIndex = number;

export function rootReducer(state: IRootState, action: RootAction): IRootState {
    if (!state) {
        // Return initial state
        return {
            currentCards: getCardsToDisplay(),
            lockedCards: new Set()
        };
    }

    switch (action.type) {
        case getType(AllActions.randomize):
            return {
                ...state,
                currentCards: getCardsToDisplay()
            };
        case getType(AllActions.toggleLock):
            return {
                ...state,
                // TODO: find nicer way of doing this
                lockedCards: state.lockedCards.has(action.payload)
                    ? new Set(
                          Array.from(state.lockedCards).filter(
                              value => value !== action.payload
                          )
                      )
                    : new Set([...state.lockedCards, action.payload])
            };
        default:
            return state;
    }
}
