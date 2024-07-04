import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send Message');

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Message Sent');

    emailjs
      .sendForm('service_3sboizq', 'template_l9gnv48', form.current, {
        publicKey: 'oxHEouJdu60iKkX3O',
      })
      .then(
        () => {
          console.log('SUCCESS!');
         
        },
        (error) => {
          console.log('FAILED...', error.text);
          setButtonText('Send Message');  
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-description">
        Have questions? We'd love to hear from you! Reach out to
        us using the form below or through our contact
        information.
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form" autoComplete="off">
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" placeholder="Your Name" required autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" placeholder="Your Email" required autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject" required autoComplete="off" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required autoComplete="off"></textarea>
        </div>
        <button type="submit" className="submit-button">{buttonText}</button>
      </form>
    </div>
  );
}

export default Contact;