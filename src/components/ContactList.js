import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
}

export default ContactList;
