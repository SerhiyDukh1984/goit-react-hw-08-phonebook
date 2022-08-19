import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterContact } from './contacts-actions';
import { getContacts, addContacts, removeContacts } from './contactsOperation';

const itemsReduser = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],

  [removeContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReduser = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const isLoadingReduser = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,

  [removeContacts.pending]: () => true,
  [removeContacts.fulfilled]: () => false,
  [removeContacts.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const errorReduser = createReducer(null, {
  [getContacts.rejected]: setError,
  [getContacts.pending]: () => null,

  [addContacts.rejected]: setError,
  [addContacts.pending]: () => null,

  [removeContacts.rejected]: setError,
  [removeContacts.pending]: () => null,
});

export const contactsReducers = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
  isLoading: isLoadingReduser,
  error: errorReduser,
});
