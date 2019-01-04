import { combineReducers } from 'redux';
import { cardsList } from './cards-list.reducer';

export const rootReducer = combineReducers({ cardsList });

export type IRootState = ReturnType<typeof rootReducer>;
