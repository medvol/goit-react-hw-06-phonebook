import { useSelector } from 'react-redux';

import { Box } from './Box';
import { Form } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contacts';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  // const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem(LS_KEY)) ?? initialContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts))

  // }, [contacts]);

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  console.log(contacts);

  console.log(filter);

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContact = getVisibleContact();

  return (
    <Box
      width="30%"
      mt={3}
      mb={3}
      ml={6}
      p={4}
      bg="white"
      borderRadius="normal"
      boxShadow="card"
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList contacts={visibleContact} />
    </Box>
  );
};
