import React from 'react';

function Contact() {
  return (
    <main className='main container'>
      <div className='content-wrapper'>
        <div className='content'>
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you! Reach out to us using the form below or through our contact information.</p>
          <form className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' placeholder='Your Name' required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' placeholder='Your Email' required />
            </div>
            <div className='form-group'>
              <label htmlFor='subject'>Subject</label>
              <input type='text' id='subject' name='subject' placeholder='Subject' required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' rows='5' placeholder='Your Message' required></textarea>
            </div>
            <button type='submit' id='send-message-btn'>Send Message</button>
          </form>
        </div>
        <div className='contact-info'>
          <h2>Contact Information</h2>
          <p>Email: contacts@kickin.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Kickin' Street, Fashion City, CA 12345</p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
