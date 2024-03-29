import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

const contactsData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (!storedContacts) return contactsData;

    const parsedContacts = JSON.parse(storedContacts);
    return parsedContacts;
  });

  const [filteredContacts, setFilteredContacts] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevState) => {
      return [...prevState, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== contactId);
    });
  };

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filteredContacts} onSearch={setFilteredContacts} />
      <ContactList contacts={searchContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
