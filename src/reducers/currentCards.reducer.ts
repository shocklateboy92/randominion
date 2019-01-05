import { AllActions, RootAction } from 'src/actions';
import { CardIndex, getRandomCardsToDisplay } from 'src/cards';
import { getType } from 'typesafe-actions';
// import { UiIndex } from './cards-list.reducer';
// import { Set } from 'immutable';
import { withUndo } from './undo.enhancer';

type ICurrentCardsState = CardIndex[];

const initialState = getRandomCardsToDisplay([]);

function currentCardsReducer(
    state: ICurrentCardsState = initialState,
    action: RootAction,
    lockedCards: any
) {
    switch (action.type) {
        case getType(AllActions.randomize):
            const lockedArray = [];
            // TODO WTF WTF WTF
            const arr = [...lockedCards];
            const arr0 = arr[0];
            if (arr0 !== undefined) {
                const arr1 = [...arr0];
                for (const i of arr1) {
                    lockedArray.push(state[i]);
                }
            }
            return getRandomCardsToDisplay(lockedArray);

        default:
            return state;
    }
}

export const currentCards = withUndo(currentCardsReducer);
