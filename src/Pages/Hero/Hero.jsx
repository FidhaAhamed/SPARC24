import React, { useState, useEffect } from 'react';
import sparcLogo from '../../assets/Images/sparc logo.png';
import { IoIosArrowDown } from "react-icons/io";
import './Hero.css';
import { useAuth } from '../../libs/helper/AuthContext';
import { useNavigate } from 'react-router-dom';


function Hero() {

  const {user} = useAuth()
  const navigate = useNavigate()

  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-10-20T08:30:00');
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleScrollToTicketSection = () => {
    const ticketSection = document.getElementById('ticket');
    if (ticketSection) {
      ticketSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAboutSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; 
  /*
  const handleRegisterClick = ()=>{
    if (user) {
      navigate('/register')
    }
    else {
      navigate('/signup',{state:{toRegister:true}})
    }
  }*/

  return (
    <section className='hero-container section' id='home'>
      <img src={sparcLogo} alt="SPARC" className='logo' />
      <h1 className='date'>
        O C T <span>2 0</span>
      </h1>
      <h1 className='excl-sub'>EXCLUSIVELY FOR FIRST YEARS.</h1>
      <button className='register-button'>REGISTRATION CLOSED</button>
      <div className='countdown'>
        <div className='time'>
          <span>00</span>
          <p>Days</p>
        </div>
        <div className='time'>
          <span>00</span>
          <p>Hours</p>
        </div>
        <div className='time'>
          <span>00</span>
          <p>Minutes</p>
        </div>
        <div className='time'>
          <span>00</span>
          <p>Seconds</p>
        </div>
      </div>
      <button className='scroll-button' onClick={handleScrollToAboutSection} >SCROLL TO EXPLORE <span><IoIosArrowDown /></span>  </button>
    </section>
  );
}

export default Hero;