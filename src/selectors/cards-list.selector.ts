import { IRootState } from 'src/reducers';
import { UiIndex } from 'src/reducers/cards-list.reducer';
import { OwnedKingdomCards } from 'src/cards';

export const getCurrentCards = (state: IRootState) =>
    state.cardsList.currentCards.present;

export const getCardAt = (state: IRootState, uiIndex: UiIndex) =>
    OwnedKingdomCards[getCurrentCards(state)[uiIndex]];

export const getLockedCards = (state: IRootState) =>
    state.cardsList.lockedCards;
