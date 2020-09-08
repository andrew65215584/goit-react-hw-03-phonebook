import React, { Component } from 'react';
import style from './App.module.css';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getName = data => {
    this.setState({ name: data });
  };

  getContact = contact => {
    let flag = true;

    this.state.contacts.map(el =>
      el.name === contact.name ? (flag = false) : '',
    );

    flag
      ? this.setState(prev => {
          return { ...prev, contacts: [...prev.contacts, contact] };
        })
      : alert(`${contact.name} is already in contacts`);
  };

  getFilterName = event => {
    this.setState({ filter: event.target.value });
  };

  filteredItems = () => {
    return this.state.filter
      ? this.state.contacts.filter(el =>
          el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
        )
      : this.state.contacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

    console.log('this.state', this.state);
  }

  render() {
    return (
      <div>
        <h1 className={style.title}>Phonebook</h1>

        <div className={style.form}>
          <ContactForm getContact={this.getContact} getName={this.getName} />
        </div>
        <h1 className={style.title}>Contacts</h1>
        <h3 className={style.subTitle}>Find contacts by name</h3>
        <Filter filter={this.state.filter} getFilterName={this.getFilterName} />

        <ContactList
          contactList={this.filteredItems()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
