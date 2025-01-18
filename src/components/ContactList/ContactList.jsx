import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContact);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={s.contactList}>
            {filteredContacts.map((contact) => (
                <li className={s.contactItem} key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
