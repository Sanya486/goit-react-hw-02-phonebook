import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
    
//   static propTypes = {
//     prop: PropTypes
//     }

    state = {
        name: '',
        number: ''
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }


  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          {' '}
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputChange}
          />
        </label>
        <label>
          {' '}
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
