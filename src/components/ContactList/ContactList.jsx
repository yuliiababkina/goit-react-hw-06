import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={s.contactList}>
            {contacts.map((contact) => (
                <li className={s.contactItem} key={contact.id}>
                    <Contact
                        contact={contact}
                        onDeleteContact={() => {
                            onDeleteContact(contact.id);
                        }}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
