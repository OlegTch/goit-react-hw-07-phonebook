import { useSelector, useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';

import ContactItem from './ContactItem';
import Loader from '../Loader/Loader';

import {
  getFilteredContacts,
  getContactsItems,
  getLoader,
} from '../../redux/phonebook/phonebook-selector';

import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const contacts = useSelector(getContactsItems);
  const dispatch = useDispatch();
  // const loading = useSelector(getLoader);

  useEffect(() => {
    dispatch(contactOperations.fetchContact());
  }, [dispatch]);

  return (
    <>
      {/* {loading && <Loader />} */}
      {contacts.length > 0 ? (
        <ul className={styles.contactsList}>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} number={phone} />
          ))}
        </ul>
      ) : (
        <p className={styles.emptyText}>Contacts list is empty</p>
      )}
    </>
  );
};

export default ContactList;
