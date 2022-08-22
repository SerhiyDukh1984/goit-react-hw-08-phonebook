import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/contacts/contactsOperation';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import s from '../components/App/App.module.css';
import { getMustContacts } from 'Redux/auth/authSelector';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const mustContacts = useSelector(getMustContacts);

  useEffect(() => {
    mustContacts && dispatch(getContacts());
  }, [dispatch, mustContacts]);

  return (
    <div>
      <h1 className={s.title}>Телефонна книга</h1>
      <div className={s.container}>
        <ContactForm />
        <div className={s.item}>
          <h2 className={s.contacts}>Контакти </h2>
          <Filter />
          <ContactsList />
        </div>
      </div>
      <h2 className={s.text}>русский военный корабль, иди НАХ*Й</h2>
    </div>
  );
};
