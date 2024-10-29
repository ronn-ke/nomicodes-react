import React from 'react'
import logo from './images/logo.jpg';
import logoNT from './images/logoNT.jpg';
import './index3.css';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className='overall'>
    <section className='header'>
        <div className='logo'>
            <img src={logoNT}></img>
            <h2>Nomicodes Technology</h2>
        </div>
        <nav className='linkbar'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <a href="#">Services</a>
        <Link to="/Contact">Contact</Link>
        </nav>
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
    </section>
  )
}

export default Services