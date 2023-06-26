import React from 'react'
import PropTypes from 'prop-types'

import { Button, Li } from 'components/Styled-Component/Styled';

const Contact = ({ contacts, deleteContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </Li>
      ))}
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default Contact
