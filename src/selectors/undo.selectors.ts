import { IRootState } from 'src/reducers';

export const canUndo = (state: IRootState) =>
    state.cardsList.currentCards.past.length > 0;

export const canRedo = (state: IRootState) =>
    state.cardsList.currentCards.future.length > 0;

export const allUnlocked = (state: IRootState) =>
    state.cardsList.lockedCards.size === 0;
