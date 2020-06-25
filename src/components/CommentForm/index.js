import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
// import "./ContactUs.css";

import './style.css'

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [car, setCar] = useState("");
  const [events, setEvents] = useState("");
  const [notes, setNotes] = useState("");
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [carError, setCarError] = useState(false);
  const [notesError, setNotesError] = useState(false);
  const [eventsError, setEventsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("btn btn-primary btn-lg");

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
      case 'car':
        value = target.value;

        if (!value) {
          setCarError(true);
        } else {
          setCarError(false);
        }

        setCar(target.value);

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
      case 'events':
        value = target.value;

        if (value) {
          setEventsError(false);
        }

        setEvents(target.value);

        break;
      default:
        return;
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

    if (!car) {
      setCarError(true);
      error = true;
    }

    if (!notes || notes.length < 10) {
      setNotesError(true);
      error = true;
    }

    if (!events) {
      setEventsError(true);
      error = true;
    }

    return !error;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      sendEmail(e);

      setButtonClassName("btn btn-secondary btn-lg disabled");

      setTimeout(() => {
        setSuccessMessage(false);
        setButtonClassName("btn btn-primary btn-lg");
      }, 5000)
    } else {
      setSuccessMessage(false);
      setErrorMessage(true);

      setTimeout(() => {
        setErrorMessage(false);
      }, 10000)
    }
  }

  function sendEmail(e) {
    emailjs
      .sendForm(
        "alpha_auto_prod",
        "template_JcskLVzi",
        e.target,
        "user_vNMUBbS8OmkDh2DOMFJ44"
      )
      .then(() => {
          setName('');
          setNumber('');
          setEmail('');
          setCar('');
          setEvents('');
          setNotes('');

          setSuccessMessage(true);
          setErrorMessage(false);
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
        <div className="col-12 col-lg-6 contact-form-field">
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
        <div className="col-12 col-lg-6 contact-form-field">
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
        <div className="col-12  col-lg-6 contact-form-field">
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
        <div className="col-12  col-lg-6 contact-form-field">
          <input
            type="text"
            placeholder="Mașină"
            onChange={handleChange}
            value={car}
            id="car"
            name="car"
            className={`form-control ${emailError ? 'is-invalid' : ''}`}
          />
        </div>
        <div className="col-12 col-lg-12 contact-form-field">
          <select
            onChange={handleChange}
            value={events}
            name="events"
            className={`form-control ${eventsError ? 'is-invalid' : ''}`}
          >
            <option disabled value="">
              Selectează manopera
            </option>
            <option value="1">Transmisie</option>
            <option value="2">Diagnostic</option>
            <option value="3">Baterie</option>
            <option value="4">Frâne</option>
            <option value="5">Schimb de anvelope</option>
          </select>
        </div>
        <div className="col-12 col-sm-12 contact-form-field">
          <textarea
            value={notes}
            onChange={handleChange}
            placeholder="Detalii manoperă"
            name="notes"
            className={`contact-textarea form-control ${notesError ? 'is-invalid' : ''}`}
          />
        </div>
        <div className="col-12 col-lg-3">
          <button type="submit" className={buttonClassName}>
            Finalizare
          </button>
        </div>
        <div className="col-12 col-lg-6">
          {
            successMessage && <p className="success-message">Mesajul a fost trimis!</p>
          }
          {
            nameError && !name ? (
                <p className="error-message">Numele este obligatoriu!</p>
              ) : numberError && !number ? (
                <p className="error-message">Numarul de telefon este obligatoriu!</p>
              ) : numberError && number && number.length !== 10 ? (
              <p className="error-message">Numarul de telefon nu este valid!</p>
            ) : carError ? (
              <p className="error-message">Mașina este obligatorie!</p>
            ) : eventsError ? (
                <p className="error-message">Alegeți tipul intervenției!</p>
              ) : notesError && notes && notes.length < 10 ? (
              <p className="error-message">Mesajul este prea scurt!</p>
                ) : (
                  errorMessage && <p className="error-message">Toate campurile sunt obligatorii!</p>
                )
          }
        </div>
      </div>
    </form>
  );
}
