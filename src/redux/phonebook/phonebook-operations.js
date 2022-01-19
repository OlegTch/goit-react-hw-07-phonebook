import axios from 'axios';
import { contactsActions } from './phonebook-actions';
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
} = contactsActions;

axios.defaults.baseURL = 'https://61e41facfbee6800175eb1e6.mockapi.io';

const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = (name, phone) => async dispatch => {
  const contact = { name, phone, completed: false };
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
    toast.success('new contact was added');
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(data));
    toast.success('contact was deleted');
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export const contactOperations = { addContact, deleteContact, fetchContact };

// ==========================================================================
// const fetchContact = () => dispatch => {
//   dispatch(fetchContactRequest());
//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };

// const addContact = (name, number) => dispatch => {
//   const contact = { name, number, completed: false };
//   dispatch(addContactRequest());
//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

// const deleteContact = contactId => dispatch => {
//   dispatch(deleteContactRequest());
//   console.log(contactId);
//   axios
//     .delete(`/contacts/:${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => dispatch(deleteContactError(error)));
// };
