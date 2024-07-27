// import React from 'react';
// import Contact from '../Contact/Contact';
// import css from './ContactList.module.css';

// export default function ContactList({ contacts }) {
//   return (
//     <div>
//       <ul className={css.listItem}>
//         {contacts.map(contact => (
//           <li key={contact.id} className={css.contactItem}>
//             <Contact contact={contact} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.listItem}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
