import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { SiTelegram } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>youremail@gmail.com</h5>
            <a
              href='mailto:youremail@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <SiTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>yourTelegram</h5>
            <a href='https://t.me/mrbeancartoon' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='tel:+123456789' target='_blank' rel='noreferrer'>
              Call Me
            </a>
          </article>
        </div>

        <form action=''>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button className='btn btn-primary' type='submit'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
