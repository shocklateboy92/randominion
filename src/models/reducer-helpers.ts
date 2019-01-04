import { RootAction } from 'src/actions';

export type ReducerHelper<T> = (
    state: T | undefined,
    action: RootAction,
    ...rest: Array<unknown>
) => T;
