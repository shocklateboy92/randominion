import { CardInfo } from './data/card-info';
import { Dictionary } from './models/dictionary';

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
