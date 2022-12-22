import style from './NameList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

// console.log("delete Contact", deleteContact.toString);

export const NameList = () => {
  // const { contacts } = props;
  // const contacts = useSelector(state => state.numberValue);
  const dispatch = useDispatch();

  const filterValueFromStore = useSelector(state => state.filterValue);
  const contactsFromStore = useSelector(state => state.numberValue);
  // console.log(contactsFromStore);
  const normalizedFilter = filterValueFromStore.toLowerCase();
  const contacts = contactsFromStore.value.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  // const deleteContact = () => {console.log("delete contact click");}
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
