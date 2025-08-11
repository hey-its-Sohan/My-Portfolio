import React, { useState } from 'react';
import nameLogo3 from '../assets/nameLogo3.png'

const Header = () => {
  const [active, setActive] = useState('');

  return (
    <div className='bg-white/30 mb-10 shadow-sm fixed backdrop-blur-md top-0 left-0 w-full z-50'>
      <div className='max-w-screen-xl mx-auto lg:px-20'>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li onClick={() => setActive('home')} className={` text-lg ${active === 'home' ? 'border-b font-medium border-primary' : ''}`}>
                  <a href="#home">Home</a>
                </li>
                <li onClick={() => setActive('about')} className={`text-lg ${active === 'about' ? 'border-b font-medium border-primary' : ''}`}>
                  <a href="#about">About</a>
                </li>
                <li onClick={() => setActive('skills')} className={`text-lg ${active === 'skills' ? 'border-b font-medium border-primary' : ''}`}>
                  <a href="#skills">Skills</a>
                </li>
                <li onClick={() => setActive('qualification')} className={`text-lg ${active === 'qualification' ? 'border-b font-medium border-primary' : ''}`}>
                  <a href="#qualification">Qualification</a>
                </li>
                <li onClick={() => setActive('projects')} className={`text-lg ${active === 'projects' ? 'border-b font-medium border-primary' : ''}`}>
                  <a href="#projects">Projects</a>
                </li>
                <li onClick={() => setActive('contact')} className={`text-lg ${active === 'contact' ? 'border-b font-medium border-primary' : ''}`}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <a href="#"><img src={nameLogo3} alt="nameLogo" className='w-24  md:w-28' /></a>

          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li onClick={() => setActive('home')} className={` text-lg ${active === 'home' ? 'border-b font-medium border-primary' : ''}`}>
                <a href="#home">Home</a>
              </li>
              <li onClick={() => setActive('about')} className={`text-lg ${active === 'about' ? 'border-b font-medium border-primary' : ''}`}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => setActive('skills')} className={`text-lg ${active === 'skills' ? 'border-b font-medium border-primary' : ''}`}>
                <a href="#skills">Skills</a>
              </li>
              <li onClick={() => setActive('qualification')} className={`text-lg ${active === 'qualification' ? 'border-b font-medium border-primary' : ''}`}>
                <a href="#qualification">Qualification</a>
              </li>
              <li onClick={() => setActive('projects')} className={`text-lg ${active === 'projects' ? 'border-b font-medium border-primary' : ''}`}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={() => setActive('contact')} className={`text-lg ${active === 'contact' ? 'border-b font-medium border-primary' : ''}`}>
                <a href="#contact">Contact</a>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;