import React, { useState } from 'react';
import logoNT from './images/logoNT.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './index4.css';
import emailjs from 'emailjs-com';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhonenumberChange = (e) => setPhonenumber(e.target.value);
    const handleSubjectChange = (e) => setSubject(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const sendEmail = (e) => {
        e.preventDefault();
    
        const templateParams = {
          to_name: 'Nomicodes Technology', // Customize recipient name if needed
          from_name: name,
          from_email: email,
          phone: phonenumber,
          subject: subject,
          message: message,
        };
    
        emailjs.send(
          'service_1gdt1rt', // Replace with your EmailJS Service ID
          'template_y0icpg4', // Replace with your EmailJS Template ID
          templateParams,
          'o9vRBgvXg9SAamPN3' // Replace with your EmailJS User ID
        )
        .then(response => {
          console.log("Email successfully sent!", response.status, response.text);
          alert("Email sent successfully!");
        })
        .catch(err => console.error("There was an error sending the email:", err));
      };

  return (
    <section className='overall'>
        <section className='header'>
            <div className='logo'>
                <img src={logoNT} alt="Nomicodes Technology Logo" />
                <h2>Nomicodes Technology</h2>
            </div>
            <nav className='linkbarr'>
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Services">Services</Link>
              <a href="#">Contact</a>
            </nav>
        </section>
        <section className='abt-contact'>
            <h4>Get in Touch</h4>
            <div className='row-1'>
                <div className='column-1'>
                    <FontAwesomeIcon icon={faPhone} className='contact-icon' />
                    <h5>Telephone</h5>
                    <h6>+254745550745</h6>
                </div>
                <div className='column-1'>
                    <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
                    <h5>Email</h5>
                    <h6>nomicodestech@gmail.com</h6>
                </div>
                <div className='column-1'>
                    <FontAwesomeIcon icon={faLocationDot} className='contact-icon' />
                    <h5>Address</h5>
                    <h6>Nairobi, KE</h6>
                </div>
                <div className='column-1'>
                    <FontAwesomeIcon icon={faGlobe} className='contact-icon' />
                    <h5>Website</h5>
                    <h6>Nomicodestech.com</h6>
                </div>
            </div>
            <div className='text'>
                <h4>Send your Message</h4>
                <h5>The contact form is currently active. Fill in the required personal details below, and add your message then submit.</h5>
            </div>
            <form onSubmit={sendEmail}>
                <input className='input1' value={name} type='text' onChange={handleNameChange} placeholder='Your Name' required /><br />
                <input className='input1' value={email} type='email' onChange={handleEmailChange} placeholder='Your Email' required /><br />
                <input className='input1' value={phonenumber} type='tel' onChange={handlePhonenumberChange} placeholder='Your Phone' /><br />
                <input className='input1' value={subject} type='text' onChange={handleSubjectChange} placeholder='Subject' /><br />
                <textarea className='input2' value={message} onChange={handleMessageChange} placeholder='Message' required /><br />
                <button className='send' type='submit'>Send</button>
            </form>
        </section>
        <section className='footer'>
            <h2>NOMICODES TECHNOLOGY ||</h2>
            <p>&copy; {new Date().getFullYear()}. nomicodestech.com</p>
        </section>
    </section>
  );
}

export default Contact;