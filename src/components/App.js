import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App(props) {
  const [contacts, setContacts] = useState([]);
  function addContactsHandler(contact) {
    let contactsInfo = [...contacts, contact];
    setContacts(contactsInfo);
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactsHandler={addContactsHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
