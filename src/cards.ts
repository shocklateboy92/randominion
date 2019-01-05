import { CardInfo } from './data/card-info';
import { Dictionary } from './models/dictionary';
// import { Set } from 'immutable';

export interface Expansion {
    name: string;
}

export interface Card {
    name: string;
    imageUrl: string;
    set: Expansion;
}

/**
 * Number that represents an index of the {@link AllCards} array.
 */
export type CardIndex = number;

const sets = CardInfo.reduce(
    (prevSets, card) => {
        return card.set in prevSets
            ? prevSets
            : { [card.set]: { name: card.set }, ...prevSets };
    },
    {} as Dictionary<Expansion>
);

export const AllCards: Card[] = CardInfo.map(card => ({
    name: card.name,
    imageUrl: card.image,
    set: sets[card.set]!
}));

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomCardsToDisplay(lockedCards: number[]) {
    let randomCardIndexes: number[];
    randomCardIndexes = [...lockedCards];
    // TODO maybe we should be using a set instead of an Array?
    while (randomCardIndexes.length < 10) {
        const randomInt = getRandomInt(AllCards.length);
        if (randomCardIndexes.indexOf(randomInt) === -1) {
            randomCardIndexes.push(randomInt);
        }
    }
    return randomCardIndexes;
}
