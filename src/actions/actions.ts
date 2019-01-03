import { createStandardAction } from 'typesafe-actions';

export const randomize = createStandardAction('RANDOMIZE')();

export const toggleLock = createStandardAction('TOGGLE_LOCK')<number>();
