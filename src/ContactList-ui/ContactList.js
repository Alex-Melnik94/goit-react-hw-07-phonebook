import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './contact-list.module.css';
import {
  getContacts,
  deleteContact,
} from '../redux/phonebook/slices/phonebookSlice';
import { getFilteredContacts } from '../redux/phonebook/contacts-selectors';

const ContactList = () => {
  const filteredContacts = useSelector(state => getFilteredContacts(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => {
        return (
          <li className={styles.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
