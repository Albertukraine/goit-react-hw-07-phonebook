import style from './NameList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilterValue } from 'redux/selectors';

export const NameList = () => {
  const dispatch = useDispatch();

  const filterValueFromStore = useSelector(getFilterValue);
  const contactsFromStore = useSelector(getContacts);

  const normalizedFilter = filterValueFromStore.toLowerCase();
  const contacts = contactsFromStore.value.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p className={style.contactWrapper}>
            <span className={style.nameText}>{contact.name}</span>
            <span className={style.numberValue}>{contact.number}</span>
          </p>
          <button
            name={contact.id}
            className={style.deleteBtn}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
