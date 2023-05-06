import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Btn } from 'components/Phonebook.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
