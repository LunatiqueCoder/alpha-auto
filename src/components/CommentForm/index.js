import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
// import "./ContactUs.css";

import './style.css'

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [events, setEvents] = useState("");
  const [notes, setNotes] = useState("");
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [notesError, setNotesError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("btn btn-warning btn-lg");

  function handleChange(e) {
    const target = e.target;
    let value;

    switch (target.name) {
      case 'name':
        value = target.value;

        if (!value) {
          setNameError(true);
        } else {
          setNameError(false);
        }

        setName(target.value);

        break;
      case 'number':
        value = target.value;

        if (value && value.length === 10) {
          setNumberError(false);
        } else if (!value || value.length > 10) {
          setNumberError(true);
        }

        setNumber(target.value);

        break;
      case 'email':
        value = target.value;

        if (!value) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }

        setEmail(target.value);

        break;
      case 'notes':
        value = target.value;

        if (value && value.length > 10) {
          setNotesError(false);
        } else if (!value) {
          setNotesError(true);
        }

        setNotes(target.value);

        break;
    }
  }

  function validateForm() {
    let error = false;

    if (!name) {
      setNameError(true);
      error = true;
    }

    if (!number || number.length !== 10) {
      setNumberError(true);
      error = true;
    }

    if (!email) {
      setEmailError(true);
      error = true;
    }

    if (!notes || notes.length < 10) {
      setNotesError(true);
      error = true;
    }

    return !error;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      sendEmail(e);
      setSuccessMessage(true);
      setErrorMessage(false);
      setButtonClassName("btn btn-secondary btn-lg disabled");

      setTimeout(() => {
        setSuccessMessage(false);
        setButtonClassName("btn btn-warning btn-lg");
      }, 5000)
    } else {
      setSuccessMessage(false);
      setErrorMessage(true);
    }
  }

  function sendEmail(e) {
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
        () => {
          alert('Mesajul nu a putut fi trimis. Va rugam verificati conexiunea la internet.');
        }
      );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <ReCAPTCHA
        sitekey="6LfCe6gZAAAAACMOSAaAS2WcHZejNtAEpEuhNgtp"
        onChange={onChange}
      />
  */}
      <div className="contact-form form-style row">
        <div className="col-12 col-lg-6">
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Nume"
            id="fname"
            name="name"
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
          />
        </div>
        <div className="col col-lg-6">
          <input
            type="text"
            placeholder="Telefon"
            onChange={handleChange}
            value={number}
            id="number"
            name="number"
            className={`form-control ${numberError ? 'is-invalid' : ''}`}
          />
        </div>
        <div className="col-12  col-lg-6">
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            id="email"
            name="email"
            className={`form-control ${emailError ? 'is-invalid' : ''}`}
          />
        </div>
        <div className="col col-lg-6">
          <select
            className="form-control"
            onChange={handleChange}
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
        </div>
        <div className="col-12 col-sm-12">
          <textarea
            className="contact-textarea"
            value={notes}
            onChange={handleChange}
            placeholder="Mesajul tău"
            name="notes"
            className={`form-control ${notesError ? 'is-invalid' : ''}`}
          />
        </div>
        <div className="col-12 col-lg-4">
          <button type="submit" className={buttonClassName}>
            Trimite mesaj
          </button>
        </div>
        <div className="col-12 col-lg-6">
          {
            successMessage && <p className="success-message">Mesajul a fost trimis!</p>
          }
          {
            numberError && number && number.length !== 10 ? (
              <p className="error-message">Numarul de telefon nu este valid</p>
            ) : notesError && notes && notes.length < 10 ? (
              <p className="error-message">Mesajul este prea scurt</p>
            ) : (
              errorMessage && <p className="error-message">Toate campurile sunt obligatorii</p>
            )
          }
        </div>
      </div>
    </form>
  );
}
