import React from 'react'
import './index2.css';
import logo from './images/logo.jpg';
import logoNT from './images/logoNT.jpg';
import { Link } from 'react-router-dom';

function about() {
  return (
    <section className='overall'>
        <section className='header'>
            <div className='logo'>
                <img src={logoNT}></img>
                <h2>Nomicodes Technology</h2>
            </div>
            <nav className='linkbar'>
                <Link to="/">Home</Link>
                <a href="#">About</a>
                <Link to="/Services">Services</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </section>
        <section className='abot'>
        <div className='abt'>
                <h2>About Us</h2>
                <h4>We specialize in crafting user-centered designs that not only<br></br>
                look great but also function seamlessly.<br></br>
                Our mission is to transform complex ideas into intuitive,engaging,<br></br>
                and efficient solutions that meet the unique needs of our clients.</h4>
                <h4>We provide state of the art-tailor-made and bespoke software solutions<br></br>
                for different company sectors.</h4>
            </div>
            <div className='goal'>
                <div className='column1'>
                    <h2>Our Goal</h2>
                    <h4>To develop innovative solutions that<br></br>
                    address the needs of users and enhance<br></br>
                    their experiences.Leveraging technology<br></br>
                    and creativity, to ensure success and<br></br>
                    customer satisfaction.</h4>
                </div>
                <div className='column1'>
                    <h2>Consultation</h2>
                    <h4>Our consulting services are designed<br></br>
                    to help organisations navigate technology<br></br>
                    complexities,optimize operations and drive<br></br>
                    innovation.</h4>
                </div>
            </div>
            <Link to='/Login'>
            <button className='consult'>Book consultation</button></Link>
            <h3>Call Us <br></br>+254745550745</h3>
        </section>
    </section>
  )
}

export default about