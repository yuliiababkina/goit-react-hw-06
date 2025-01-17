import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import s from "./App.module.css";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contactData from "../assets/contactData.json";

const App = () => {
    const [contacts, setContacts] = useState(() => {
        const storagedContacts =
            window.localStorage.getItem("storagedContacts");

        if (storagedContacts) {
            return JSON.parse(storagedContacts);
        }
        return contactData;
    });
    const [searchedContact, setSearchedContact] = useState("");

    useEffect(() => {
        window.localStorage.setItem(
            "storagedContacts",
            JSON.stringify(contacts)
        );
    }, [contacts]);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchedContact.toLowerCase())
    );

    const handleSearchContacts = (e) => {
        setSearchedContact(e.target.value);
    };

    const addContact = (values, actions) => {
        setContacts((prev) => [
            ...prev,
            { id: nanoid(5), name: values.name, number: values.number },
        ]);

        actions.resetForm();
    };

    const deleteContact = (id) => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={addContact} />

            <SearchBox
                searchedContact={searchedContact}
                onSearchContact={handleSearchContacts}
            />

            {filteredContacts.length ? (
                <ContactList
                    contacts={filteredContacts}
                    onDeleteContact={deleteContact}
                />
            ) : (
                <p className={s.notFound}>Contact not found</p>
            )}
        </div>
    );
};

export default App;
