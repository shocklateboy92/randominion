import { CardInfo } from './data/card-info';
import { Dictionary } from './models/dictionary';

export interface Expansion {
    name: string;
}

export interface Card {
    name: string;
    set: Expansion;
}

const sets = CardInfo.reduce(
    (prevSets, card) => {
        return card.set in prevSets
            ? prevSets
            : { [card.set]: { name: card.set }, ...prevSets };
    },
    {} as Dictionary<Expansion>
);

const cards: Card[] = CardInfo.map(card => ({
    name: card.name,
    set: sets[card.set]!
}));

export function getCardsToDisplay() {
    return cards.slice(0, 10);
}
