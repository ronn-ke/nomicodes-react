import React, {useState} from 'react'
import logo from './images/logo.jpg';
import logoNT from './images/logoNT.jpg';
import { Link } from 'react-router-dom';
import'./index4.css';

function Contact() {
    const handleClick = () => {

    }
    
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const [isNameFilled, setIsNameFilled] = useState(false);
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const [isPhonenumberFilled, setIsPhonenumberFilled] = useState(false);
    const [isSubjectFilled, setIsSubjectFilled] = useState(false);
    const [isMessageFilled, setIsMessageFilled] = useState(false);

    function handleNameChange(event){
        setName(event.target.value);
        setIsNameFilled(!!event.target.value);
    }
    function handlePhonenumberChange(event){
        setPhonenumber(event.target.value);
        setIsPhonenumberFilled(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
        setIsEmailFilled(event.target.value);
    }
    function handleSubjectChange(event){
        setSubject(event.target.value);
        setIsSubjectFilled(event.target.value);
    }
    function handleMessageChange(event){
        setMessage(event.target.value);
        setIsMessageFilled(event.target.value);
    }

  return (
    <section className='overall'>
        <section className='header'>
            <div className='logo'>
                <img src={logoNT}></img>
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
                    <h5>Icon</h5>
                    <h5>Telephone</h5>
                    <h6>+254745550745</h6>
                </div>
                <div className='column-1'>
                    <h5>Icon</h5>
                    <h5>Email</h5>
                    <h6>nomicodestech@gmail.com</h6>
                </div>
                <div className='column-1'>
                    <h5>Icon</h5>
                    <h5>Address</h5>
                    <h6>Nairobi, KE</h6>
                </div>
                <div className='column-1'>
                    <h5>Icon</h5>
                    <h5>Website</h5>
                    <h6>Nomicodestech.com</h6>
                </div>
            </div>
            <div className='text'>
            <h4>Send your Message</h4>
            <h5>The contact form is currently active.Fill<br></br>
            in the required personal details below ,and <br></br>
            add your message then submit.</h5></div>
                   <input className='input1' value={name} type='string' onChange={handleNameChange} placeholder='Your Name'></input><br></br>
                   <input className='input1' value={email} type='string' onChange={handleEmailChange} placeholder='Your Email'></input><br></br>
                   <input className='input1' value={phonenumber} type='tel' onChange={handlePhonenumberChange} placeholder='Your Phone'></input><br></br>
                   <input className='input1' value={subject} type='string' onChange={handleSubjectChange} placeholder='Subject'></input><br></br>
                   <input className='input2' value={message} type='string' onChange={handleMessageChange} placeholder='Message'></input><br></br>
                  <button className='send'>Send</button>  
        </section>
        <section className='footer'>
        <h2>NOMICODES TECHNOLOGY ||</h2>
        <p>&copy; {new Date().getFullYear()}.nomicodestech.com</p>
        </section>
    </section>
  )
}

export default Contact