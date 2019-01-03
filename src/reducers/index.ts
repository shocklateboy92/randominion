import { CardIndex } from 'src/cards';
import { RootAction } from 'src/actions';

export interface IRootState {
    currentCards: CardIndex[];
    lockedCards: UiIndex[];
}

/**
 * A number that represents an index in the {@link IRootState#currentCards} array
 */
export type UiIndex = number;

export function rootReducer(state: IRootState, action: RootAction): IRootState {
    return {
        currentCards: Array(10).fill(8),
        lockedCards: []
    };
}
