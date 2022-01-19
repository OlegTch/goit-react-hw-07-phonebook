import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from './phonebook-actions';
// import { deleteError } from '../../helpers/errors';
// import dataContacts from '../../data/contacts.json';
import { toast } from 'react-toastify';

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} = contactsActions;

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: (_, action) => toast.error('contact fetch error'),
  [fetchContactRequest]: () => null,
  [addContactError]: (_, action) => toast.error('add delete error'),
  [addContactRequest]: () => null,
  [deleteContactError]: (_, action) => toast.error('contact delete error'),
  [deleteContactRequest]: () => null,
  // [deleteContactError]: (_, action) => alert('DELETE ERROR'),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
