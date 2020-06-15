import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        number: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            number,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (number === '') {
            error.number = "Select your number of number";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.number === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                number: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {

        const { name,
            email,
            number,
            events,
            notes, error } = this.state;

        return (
            <form onSubmit={this.subimtHandler}>
                <div className="contact-form form-style row">
                    <div className="col-12 col-lg-6">
                        <input type="text" value={name} onChange={this.changeHandler} placeholder="Your Name*" id="fname" name="name" />
                        <p>{error.name ? error.name : ''}</p>
                    </div>
                    <div className="col col-lg-6">
                        <input type="text" placeholder="Phone" onChange={this.changeHandler} value={number} id="number" name="number" />
                        <p>{error.number ? error.number : ''}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                        <input type="email" placeholder="Your Email" onChange={this.changeHandler} value={email} id="email" name="email" />
                        <p>{error.email ? error.email : ''}</p>
                    </div>
                    <div className="col col-lg-6">
                        <select className="form-control" onChange={this.changeHandler} value={events} name="events">
                            <option disabled value="">Tires Replacement</option>
                            <option value="1">Transmission</option>
                            <option value="2">Diagnostic</option>
                            <option value="3">Batteries</option>
                            <option value="4">Breaks</option>
                        </select>
                        <p>{error.events ? error.events : ''}</p>
                    </div>
                    <div className="col-12 col-sm-12">
                        <textarea className="contact-textarea" value={notes} onChange={this.changeHandler} placeholder="Message" name="notes"></textarea>
                        <p>{error.notes ? error.notes : ''}</p>
                    </div>
                    <div className="col-12">
                            <button type="submit" className="theme-btn-s4">Appointment</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm;