import { IRootState } from 'src/reducers';

export const getCurrentlySelectedCard = (state: IRootState) =>
    state.cardInfoPane.currentIndex;
