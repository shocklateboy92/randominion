import { IRootState } from 'src/reducers';
import { UiIndex } from 'src/reducers/cards-list.reducer';
import { AllCards } from 'src/cards';

export const getCurrentCards = (state: IRootState) =>
    state.cardsList.currentCards;

export const getCardAt = (state: IRootState, uiIndex: UiIndex) =>
    AllCards[getCurrentCards(state)[uiIndex]];

export const getLockedCards = (state: IRootState) =>
    state.cardsList.lockedCards;
