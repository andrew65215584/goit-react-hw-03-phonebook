import React from 'react';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';

function ContactList({ contactList, deleteContact }) {
  return (
    <ul className={styles.list}>
      {contactList.map(el => {
        return (
          <li key={el.id} className={styles.item}>
            <span>{el.name}</span>
            <span>: {el.number}</span>
            <button
              onClick={() => deleteContact(el.id)}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func,
};

export default ContactList;
