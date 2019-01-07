import { CardInfo } from './data/card-info';
import { Dictionary } from './models/dictionary';

export interface Expansion {
    name: string;
}

export interface Card {
    name: string;
    imageUrl: string;
    set: Expansion;
    type: string;
    removed: boolean;
    boxPosition?: number;
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

const PROMO_CARD_SET_NAME = 'Promo';

function IsOwnedKingdomCard(card: Card): boolean {
    if (
        card.set !== sets['Dark Ages']! &&
        card.type === 'kingdom' &&
        !(
            card.set === sets[PROMO_CARD_SET_NAME] &&
            card.name !== 'Walled Village' &&
            card.name !== 'Stash'
        ) &&
        !(card.set === sets['Intrigue 2nd Edition'] && card.removed)
    ) {
        return true;
    }
    return false;
}

const AllCards: Card[] = CardInfo.map(card => ({
    name: card.name,
    imageUrl: card.image,
    set: sets[card.set]!,
    type: card.type,
    removed: card.status === 'removed'
}));

export const KingdomCardsOwned: Card[] = AllCards.filter((card, index) =>
    IsOwnedKingdomCard(card)
);
