import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import addContact from './phonebook-operations';
const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

// const addContact = createAction('contact/Add', (name, number) => {
//   return {
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// });

// const deleteContact = createAction('contact/Delete');

const changeFilter = createAction('contact/Filter');

export const contactsActions = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,

  changeFilter,
};
