import React, { Component } from "react";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    events: "",
    notes: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();

    const { name, email, number, events, notes, error } = this.state;

    if (name === "") {
      error.name = "Numele este obligatoriu";
    }
    if (email === "") {
      error.email = "Email-ul este obligatoriu";
    }
    if (number === "") {
      error.number = "Numărul de telefon este obligatoriu";
    }
    if (events === "") {
      error.events = "Alegeți o opțiune";
    }
    if (notes === "") {
      error.notes = "Mesajul este obligatoriu";
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.email === "" &&
      error.number === "" &&
      error.events === "" &&
      error.notes === ""
    ) {
      this.setState({
        name: "",
        email: "",
        number: "",
        events: "",
        notes: "",
        error: {},
      });
    }
  };

  render() {
    const { name, email, number, events, notes, error } = this.state;

    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "alpha_auto",
          "template_JcskLVzi",
          e.target,
          "user_vNMUBbS8OmkDh2DOMFJ44"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    return (
      <form onSubmit={this.sendEmail}>
        <div className="contact-form form-style row">
          <div className="col-12 col-lg-6">
            <input
              type="text"
              value={name}
              onChange={this.changeHandler}
              placeholder="Nume"
              id="fname"
              name="name"
            />
            <p>{error.name ? error.name : ""}</p>
          </div>
          <div className="col col-lg-6">
            <input
              type="text"
              placeholder="Telefon"
              onChange={this.changeHandler}
              value={number}
              id="number"
              name="number"
            />
            <p>{error.number ? error.number : ""}</p>
          </div>
          <div className="col-12  col-lg-6">
            <input
              type="email"
              placeholder="Email"
              onChange={this.changeHandler}
              value={email}
              id="email"
              name="email"
            />
            <p>{error.email ? error.email : ""}</p>
          </div>
          <div className="col col-lg-6">
            <select
              className="form-control"
              onChange={this.changeHandler}
              value={events}
              name="events"
            >
              <option disabled value="">
                Schimb de anvelope
              </option>
              <option value="1">Transmisie</option>
              <option value="2">Diagnostic</option>
              <option value="3">Baterie</option>
              <option value="4">Frâne</option>
            </select>
            <p>{error.events ? error.events : ""}</p>
          </div>
          <div className="col-12 col-sm-12">
            <textarea
              className="contact-textarea"
              value={notes}
              onChange={this.changeHandler}
              placeholder="Mesajul tău"
              name="notes"
            ></textarea>
            <p>{error.notes ? error.notes : ""}</p>
          </div>
          <div className="col-12">
            <button type="submit" className="theme-btn-s4">
              Trimite mesaj
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;
