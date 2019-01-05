import { Set } from 'immutable';
import { AllActions, RootAction } from 'src/actions';
import { getType } from 'typesafe-actions';
import { currentCards } from './currentCards.reducer';

interface IRootState {
    currentCards: ReturnType<typeof currentCards>;
    lockedCards: Set<UiIndex>;
}

/**
 * A number that represents an index in the {@link IRootState#currentCards} array
 */
export type UiIndex = number;

const initialState = {
    currentCards: undefined!,
    lockedCards: Set()
};
export function cardsList(
    state: IRootState = initialState,
    action: RootAction
): IRootState {
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
                lockedCards: Set()
            };
        default:
            let lockedCardNumbers = Set();
            for (const i of state.lockedCards) {
                lockedCardNumbers = lockedCardNumbers.add(
                    state.currentCards.present[i]
                );
            }

            const currentCardsNew = currentCards(
                state.currentCards,
                action,
                state.lockedCards
            );

            let lockedCadsNew = Set();
            for (const i in currentCardsNew.present) {
                if (lockedCardNumbers.contains(currentCardsNew.present[i])) {
                    lockedCadsNew = lockedCadsNew.add(parseInt(i, 10));
                }
            }
            return {
                ...state,
                currentCards: currentCardsNew,
                lockedCards: lockedCadsNew
            };
    }
}
