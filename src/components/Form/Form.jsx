import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import {
  FormTag,
  Lable,
  Input,
  Button,
} from 'components/Styled-Component/Styled';



export default class Form extends Component {
    
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  submitHandler = e => {
    e.preventDefault();
    const id = nanoid();
    this.props.onSubmit(id, this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormTag onSubmit={this.submitHandler}>
        <Lable>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputChange}
          />
        </Lable>
        <Lable>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number.trim()}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onInputChange}
          />
        </Lable>
        <Button type="submit">Add contact</Button>
      </FormTag>
    );
  }
}
