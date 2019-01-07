import { CardInfo } from './data/card-info';
import { Dictionary } from './models/dictionary';

const SET_NAME_PROMO_CARDS = 'Promo';
const SET_NAME_DARK_AGES = 'Dark Ages';
const SET_NAME_INTRIGUE = 'Intrigue 2nd Edition';
const SET_TYPE_KINGDOM = 'kingdom';
const PROMO_CARD_WALLED_VILLAGE = 'Walled Village';
const PROMO_CARD_STASH = 'Stash';

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

function IsOwnedKingdomCard(card: Card): boolean {
    if (
        card.set !== sets[SET_NAME_DARK_AGES]! &&
        card.type === SET_TYPE_KINGDOM &&
        !(
            card.set === sets[SET_NAME_PROMO_CARDS] &&
            card.name !== PROMO_CARD_WALLED_VILLAGE &&
            card.name !== PROMO_CARD_STASH
        ) &&
        !(card.set === sets[SET_NAME_INTRIGUE] && card.removed)
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
