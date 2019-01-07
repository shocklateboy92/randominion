import { Set as ImmutableSet } from 'immutable';
import { AllActions, RootAction } from 'src/actions';
import { getType } from 'typesafe-actions';
import { currentCards } from './currentCards.reducer';

interface IRootState {
    currentCards: ReturnType<typeof currentCards>;
    lockedCards: ImmutableSet<UiIndex>;
}

/**
 * A number that represents an index in the {@link IRootState#currentCards} array
 */
export type UiIndex = number;

const initialState = {
    currentCards: undefined!,
    lockedCards: ImmutableSet()
};
export function cardsList(
    state: IRootState = initialState,
    action: RootAction
): IRootState {
    if (!state || !state.currentCards) {
        return {
            currentCards: currentCards(undefined, action, undefined),
            lockedCards: ImmutableSet()
        };
    } else {
        switch (action.type) {
            case getType(AllActions.toggleLock):
                return {
                    ...state,
                    lockedCards: state.lockedCards.contains(action.payload)
                        ? state.lockedCards.remove(action.payload)
                        : state.lockedCards.add(action.payload)
                };
            case getType(AllActions.unlockAll):
                return {
                    ...state,
                    lockedCards: ImmutableSet()
                };
            case getType(AllActions.lockAll):
                return {
                    ...state,
                    lockedCards: ImmutableSet([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
                };
            case getType(AllActions.randomize):
            case getType(AllActions.redo):
            case getType(AllActions.undo):
                // Keep track of locked cards
                const lockedCardNumbers = new Set();
                for (const i of state.lockedCards) {
                    lockedCardNumbers.add(state.currentCards.present[i]);
                }

                const currentCardsNew = currentCards(
                    state.currentCards,
                    action,
                    lockedCardNumbers
                );

                // Re Lock Cards
                const lockedCadsNew = new Set();
                for (const i in currentCardsNew.present) {
                    if (lockedCardNumbers.has(currentCardsNew.present[i])) {
                        lockedCadsNew.add(parseInt(i, 10));
                    }
                }

                return {
                    ...state,
                    currentCards: currentCardsNew,
                    lockedCards: ImmutableSet(lockedCadsNew)
                };
            default:
                return state;
        }
    }
}
