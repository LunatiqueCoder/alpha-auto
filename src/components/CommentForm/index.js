import React, { useState } from "react";
import emailjs from "emailjs-com";

// import "./ContactUs.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [events, setEvents] = useState("");
  const [notes, setNotes] = useState("");

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
    <form onSubmit={sendEmail}>
      <div className="contact-form form-style row">
        <div className="col-12 col-lg-6">
          <input
            type="text"
            // value={name}
            // onChange={this.changeHandler}
            placeholder="Nume"
            id="fname"
            name="name"
          />
          <p>{name ? name : ""}</p>
        </div>
        <div className="col col-lg-6">
          <input
            type="text"
            placeholder="Telefon"
            // onChange={this.changeHandler}
            // value={number}
            id="number"
            name="number"
          />
          <p>{number ? number : ""}</p>
        </div>
        <div className="col-12  col-lg-6">
          <input
            type="email"
            placeholder="Email"
            // onChange={this.changeHandler}
            // value={email}
            id="email"
            name="email"
          />
          <p>{email ? email : ""}</p>
        </div>
        <div className="col col-lg-6">
          <select
            className="form-control"
            // onChange={this.changeHandler}
            // value={events}
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
          <p>{events ? events : ""}</p>
        </div>
        <div className="col-12 col-sm-12">
          <textarea
            className="contact-textarea"
            // value={notes}
            // onChange={this.changeHandler}
            placeholder="Mesajul tău"
            name="notes"
          ></textarea>
          <p>{notes ? notes : ""}</p>
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
