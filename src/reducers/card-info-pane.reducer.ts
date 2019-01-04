import { RootAction, AllActions } from 'src/actions';
import { getType } from 'typesafe-actions';

export function cardInfoPane(
    state: { currentIndex: number } | undefined,
    action: RootAction
) {
    if (!state) {
        return { currentIndex: 71 };
    }

    switch (action.type) {
        case getType(AllActions.selectCard):
            return {
                ...state,
                currentIndex: action.payload
            };
        default:
            return state;
    }
}
