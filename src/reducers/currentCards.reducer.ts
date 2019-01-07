import { AllActions, RootAction } from 'src/actions';
import { CardIndex, KingdomCardsOwned } from 'src/cards';
import { getType } from 'typesafe-actions';
import { UiIndex } from './cards-list.reducer';
import { Set as ImmutableSet } from 'immutable';
import { withUndo } from './undo.enhancer';

type ICurrentCardsState = CardIndex[];

const KINGDOM_CARDS_REQUIRED = 10;
const initialState = getRandomCardsToDisplay(ImmutableSet());

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomCardsToDisplay(lockedCards: ImmutableSet<number>): number[] {
    let randomCardIndices: ImmutableSet<number> = lockedCards;

    while (randomCardIndices.size < KINGDOM_CARDS_REQUIRED) {
        const randomInt = getRandomInt(KingdomCardsOwned.length);
        if (!randomCardIndices.contains(randomInt)) {
            randomCardIndices = randomCardIndices.add(randomInt);
        }
    }
    return randomCardIndices.toJS();
}

function currentCardsReducer(
    state: ICurrentCardsState = initialState,
    action: RootAction,
    lockedCards: ImmutableSet<UiIndex>
) {
    switch (action.type) {
        case getType(AllActions.randomize):
            return getRandomCardsToDisplay(lockedCards).sort((a, b) => a - b);

        default:
            return state;
    }
}

export const currentCards = withUndo(currentCardsReducer);
