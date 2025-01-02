import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_80729v6', 'template_pf5lsrj', form.current, {
        publicKey: 'ChzkTHkssIabHeAdr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='text'>
        <h2>Got ideas? We've got the skills. Let's  team up</h2>
        <p> Tell me more about whats you're got in mind.</p>
      </div>
      <label>Your name</label>
      <input type="text" name="user_name" />
      <label>Your e-mail</label>
      <input type="email" name="user_email" />
      <label>Describe your idea</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};