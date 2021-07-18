import React from "react";

import { v4 as uuidv4 } from "uuid";

export class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  nameId = uuidv4();
  numberId = uuidv4();

  handleInputValues = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  submitForm = (evt) => {
    evt.preventDefault();
    this.props.onSubmit({
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor={this.nameId}>Name</label>
        <input
          id={this.nameId}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={this.state.name}
          onChange={this.handleInputValues}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <label htmlFor={this.numberId}>Number</label>
        <input
          id={this.numberId}
          type="tel"
          name="number"
          placeholder="Enter telephone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={this.state.number}
          onChange={this.handleInputValues}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
