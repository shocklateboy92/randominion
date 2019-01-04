import { createStandardAction } from 'typesafe-actions';

export const randomize = createStandardAction('RANDOMIZE')();

export const toggleLock = createStandardAction('TOGGLE_LOCK')<number>();

export const unlockAll = createStandardAction('UNLOCK_ALL')();

export const selectCard = createStandardAction('SELECT_CARD')<number>();
