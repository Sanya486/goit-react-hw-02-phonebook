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

}

export default Contact
