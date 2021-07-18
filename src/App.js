import React from "react";

import { Container } from "./components/Container/Container";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = (newContact) => {
    if (
      this.state.contacts.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(
        "You have contact with this name, please remove old contact and create new"
      );
      return;
    }

    this.setState({
      contacts: [newContact, ...this.state.contacts],
    });
  };

  removeContact = (data) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== data),
    }));
  };

  changeFilterValue = (evt) => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    const contacts = this.getContacts();

    return (
      <Container>
        <h1>PhoneBook</h1>
        <h2>Add contact</h2>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <Filter value={this.state.filter} onChange={this.changeFilterValue} />
        )}

        <ContactList contacts={contacts} onRemoveContact={this.removeContact} />
      </Container>
    );
  }
}

export default App;
