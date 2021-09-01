import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
import styles from './styles.module.css';
import {
  getItems,
  getTotalContacts,
  getLoader,
} from './redux/phonebook/contacts-selectors';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

export default function App() {
  const contacts = useSelector(state => getItems(state));
  const totalContacts = useSelector(state => getTotalContacts(state));
  const loading = useSelector(state => getLoader(state));

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 ? (
        <>
          <h2>Total contacts: {totalContacts}</h2>
          <Filter />
        </>
      ) : (
        <h2>Phonebook is empty</h2>
      )}
      <ContactList />
      {loading && (
        <Loader
          type="ThreeDots"
          color="#363636"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
    </div>
  );
}
