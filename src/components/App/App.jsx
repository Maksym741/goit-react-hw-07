// import React from 'react';
// import css from './App.module.css';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';
// import { Toaster } from 'react-hot-toast';

// export default function App() {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectNameFilter);

//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={css.container}>
//       <Toaster />
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList contacts={visibleContacts} />
//     </div>
//   );
// }

import React from 'react';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {
  return (
    <div className={css.container}>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
