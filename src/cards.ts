import { CardInfo } from './data/card-info';
import { Dictionary } from './models/dictionary';

interface Expansion {
    name: string;
}

interface Card {
    name: string;
    set: Expansion;
}

const sets = CardInfo.reduce(
    (sets, card) => {
        return card.set in sets
            ? sets
            : { [card.set]: { name: card.set }, ...sets };
    },
    {} as Dictionary<Expansion>
);

const cards: Card[] = CardInfo.map(card => ({
    name: card.name,
    set: sets[card.set]
}));

function initialize() {}
