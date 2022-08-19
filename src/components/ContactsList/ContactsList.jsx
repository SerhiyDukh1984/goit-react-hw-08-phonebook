import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'Redux/contacts/contactsOperation';
import s from './ContactsList.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <span className={s.contact_name}>{contact.name}:</span>
          <span className={s.contact_number}>{contact.number}</span>
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(removeContacts(contact.id))}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
