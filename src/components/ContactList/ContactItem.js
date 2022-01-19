import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations } from '../../redux/phonebook/phonebook-operations';
// import { contactsActions } from '../../redux/phonebook/phonebook-actions';
import { getLoader } from '../../redux/phonebook/phonebook-selector';
import Loader from '../Loader/Loader';

import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  // const loading = useSelector(getLoader);

  const onDeleteContact = idx => dispatch(contactOperations.deleteContact(idx));

  return (
    <li className={styles.contactsItem} id={id}>
      <p className={styles.contactsName}>{name}:</p>
      <p className={styles.contactsNumber}>{number}</p>
      <button
        className={styles.contactsButton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        {/* {loading && <Loader height={2} width={2} />} */}
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
