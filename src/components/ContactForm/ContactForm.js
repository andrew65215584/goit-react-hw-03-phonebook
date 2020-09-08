import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    this.props.getName(this.state.name);
  };

  handleSubmitForm = event => {
    event.preventDefault();

    this.props.getContact({ ...this.state, id: uuidv4() });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm} className={styles.form}>
        <h2>Name</h2>

        <label className={styles.label}>
          Ім'я:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            className={styles.input}
          />
        </label>

        <br />

        <label className={styles.label}>
          Номер телефона:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  getContact: PropTypes.func,
  getName: PropTypes.func,
};

export default ContactForm;
