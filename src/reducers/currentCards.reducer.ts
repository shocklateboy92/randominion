import { AllActions, RootAction } from 'src/actions';
import { CardIndex, OwnedKingdomCards } from 'src/cards';
import { getType } from 'typesafe-actions';
import { UiIndex } from './cards-list.reducer';
import { withUndo } from './undo.enhancer';

type ICurrentCardsState = CardIndex[];

const KINGDOM_CARDS_REQUIRED = 10;
const initialState = getRandomCardsToDisplay(new Set());

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomCardsToDisplay(lockedCards: Set<number>): number[] {
    let randomCardIndices: Set<number> = new Set(lockedCards);

    while (randomCardIndices.size < KINGDOM_CARDS_REQUIRED) {
        const randomInt = getRandomInt(OwnedKingdomCards.length);
        if (!randomCardIndices.has(randomInt)) {
            randomCardIndices = randomCardIndices.add(randomInt);
        }
    }
    return Array.from(randomCardIndices).sort((a, b) => a - b);
}

function currentCardsReducer(
    state: ICurrentCardsState = initialState,
    action: RootAction,
    lockedCards: Set<UiIndex>
) {
    switch (action.type) {
        case getType(AllActions.randomize):
            return getRandomCardsToDisplay(lockedCards);

        default:
            return state;
    }
}

export const currentCards = withUndo(currentCardsReducer);
