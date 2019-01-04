import { combineReducers } from 'redux';
import { cardInfoPane } from './card-info-pane.reducer';
import { cardsList } from './cards-list.reducer';

export const rootReducer = combineReducers({ cardsList, cardInfoPane });

export type IRootState = ReturnType<typeof rootReducer>;
