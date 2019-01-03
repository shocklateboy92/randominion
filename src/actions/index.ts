import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type RootAction = ActionType<typeof actions>;
