import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <div>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button type="button">Delete</button>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {};

export default ContactList;
