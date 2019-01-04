import { createStandardAction } from 'typesafe-actions';

export const undo = createStandardAction('UNDO')();

export const redo = createStandardAction('REDO')();
