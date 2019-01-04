import { AllActions, RootAction } from 'src/actions';
import { ReducerHelper } from 'src/models/reducer-helpers';
import { getType } from 'typesafe-actions';

interface IUndoState<T> {
    past: T[];
    present: T;
    future: T[];
}

export const withUndo = <T>(reducer: ReducerHelper<T>) => (
    state: IUndoState<T> | undefined,
    action: RootAction,
    ...extraArgs: Array<unknown>
): IUndoState<T> => {
    if (!state) {
        return {
            past: [],
            present: reducer(undefined, AllActions.initialize(), extraArgs),
            future: []
        };
    }
    switch (action.type) {
        case getType(AllActions.undo):
            if (!state.past.length) {
                return state;
            }

            return {
                past: state.past.slice(0, state.past.length - 1),
                present: state.past[state.past.length - 1],
                future: [state.present, ...state.future]
            };
        case getType(AllActions.redo):
            if (!state.future.length) {
                return state;
            }

            return {
                past: [...state.past, state.present],
                present: state.future[0],
                future: state.future.slice(1)
            };

        default:
            const newPresent = reducer(state.present, action, extraArgs);
            if (newPresent === state.present) {
                return state;
            }

            return {
                past: [...state.past, state.present],
                present: newPresent,
                future: []
            };
    }
};
