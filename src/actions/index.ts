import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as metaActions from './meta.actions';
import * as undoActions from './undo.actions';

export type RootAction = ActionType<typeof AllActions>;

export const AllActions = { ...actions, ...undoActions, ...metaActions };
