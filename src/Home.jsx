
import React, { useState } from 'react'
import logoNT from './images/logoNT.jpg';
import image from './images/image.jpg';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
   
    
  return (
    <section className='overall'>
        <section className='header'>
            <div className='logo'>
                <img src={logoNT}></img>
                <h2>Nomicodes Technology</h2>
            </div>
            <nav className='linkbar'>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
            </nav>
        </section>
        <section className='header2'>
            <img src={image}></img>
        </section>
        <section className='about'>
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
            <Link to={'/Login'}>
            <button className='consult'>Book consultation</button></Link>
            <h3>Call Us <br></br>+254745550745</h3>

        </section>
        <section className='services'>
            <div className='intro'>
                <h2>Our Services</h2>
                <h3>Our service provision encompasses a wide<br></br>
                range of offerings that support clients in<br></br>
                achieving their technological goals.</h3>
            </div>
            <div className='serv'>
                <button className='servic'>
                    <h3>WEB DEVELOPMENT</h3>
                    <h4>Creation of responsive<br></br>
                    and website performance,<br></br>
                    accessibility and optimization.</h4>
                    <button className='more'>Learn more</button>
                </button>
                <button className='servic'>
                    <h3>UI/UX DESIGN</h3>
                    <h4>Transform your idea into<br></br>
                    intuitive experience where<br></br>
                    creativity meets functionality.</h4>
                    <button className='more'>Learn more</button>
                </button>
                <button className='servic'>
                    <h3>WEB DESIGN</h3>
                    <h4>Specialists in crafting<br></br>
                    the state of art web & mobile<br></br>
                    that cater for your business needs.</h4>
                    <button className='more'>Learn more</button>
                </button>
                <button className='servic'>
                    <h3>TECHNICAL SUPPORT</h3>
                    <h4>Stay up-to-date with the<br></br>
                    latest technology , implement<br></br>
                    solutions that drive growth.</h4>
                    <button className='more'>Learn more</button>
                </button>
            </div>
        </section>
        <section className='contact'>
            <div className='row'>
              
                 <div className='social-column'>
                   <h3>Contact</h3>
                   <h4>Email<br></br>
                   nomicodestech@gmail.com</h4>
                   <h4>Calls<br></br>
                   +254745550745</h4>
                 </div>

                <div className='link-column'>
                    <h3>Quick Links</h3>
                    <nav className='footer-qlinks'>
                        <Link to="/About">About</Link>
                        <Link to="/Services">Services</Link>
                        <Link to="/Contact">Contact</Link>
                    </nav>
                </div>
                <div className='support-column'>
                    <h3>Support</h3>
                    <nav className='footer-slinks'>
                        <a href='#'>Privacy policy</a>
                        <a href='#'>Terms and condition</a>
                        <a href='#'>Help</a>
                    </nav>
                </div>
              
            </div>
        </section>

    </section>
  )
}

export default Home