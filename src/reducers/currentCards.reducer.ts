import { AllActions, RootAction } from 'src/actions';
import { CardIndex, getCardsToDisplay } from 'src/cards';
import { getType } from 'typesafe-actions';
import { UiIndex } from './cards-list.reducer';
import { Set } from 'immutable';

type ICurrentCardsState = CardIndex[];

const initialState = getCardsToDisplay();

export function currentCards(
    state: ICurrentCardsState = initialState,
    action: RootAction,
    lockedCards: Set<UiIndex>
) {
    switch (action.type) {
        case getType(AllActions.randomize):
            return {
                ...state,
                // currentCards: getCardsToDisplay()
                currentCards: state
                    .map(a => ({ sort: Math.random(), value: a }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(a => a.value)
            };

        default:
            return state;
    }
}
