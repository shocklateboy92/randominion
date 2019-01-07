import { AllActions, RootAction } from 'src/actions';
import { CardIndex, AllCards } from 'src/cards';
import { getType } from 'typesafe-actions';
import { UiIndex } from './cards-list.reducer';
import { Set as ImmutableSet } from 'immutable';
import { withUndo } from './undo.enhancer';

type ICurrentCardsState = CardIndex[];

const initialState = getRandomCardsToDisplay(ImmutableSet());

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomCardsToDisplay(lockedCards: ImmutableSet<number>) {
    let randomCardIndexes: ImmutableSet<number> = lockedCards;

    while (randomCardIndexes.size < 10) {
        const randomInt = getRandomInt(AllCards.length);
        if (!randomCardIndexes.contains(randomInt)) {
            randomCardIndexes = randomCardIndexes.add(randomInt);
        }
    }
    return randomCardIndexes.toJS();
}

function currentCardsReducer(
    state: ICurrentCardsState = initialState,
    action: RootAction,
    lockedCards: ImmutableSet<UiIndex> | any
) {
    switch (action.type) {
        case getType(AllActions.randomize):
            return getRandomCardsToDisplay(lockedCards);

        default:
            return state;
    }
}

export const currentCards = withUndo(currentCardsReducer);
