import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import Title from './Title/Title';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addNewContact = e => {
    e.preventDefault();

    const id = nanoid();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { id, name, number }] };
    });
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onActiveFilter = () => {
    
    return this.state.contacts.filter(contact => contact.name.includes(this.state.filter))
    
  }

  render() {
    return (
      <>
        <Title text="Phonebook"></Title>
        <Form onSubmit={this.addNewContact}>\</Form>
        <Title text="Contacts"></Title>
        <Filter text={this.state.filter} onChange={this.onFilterChange} />
        <ContactList
          contacts={
            this.state.filter === '' ? this.state.contacts : this.onActiveFilter()
          }
        />
      </>
    );
  }
}
