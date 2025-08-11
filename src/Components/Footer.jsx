import React from 'react';
import { Copyright, Facebook, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-sky-100 mt-16 border-t border-gray-200'>
      <div className='max-w-screen-xl mx-auto px-4 py-8 flex flex-col items-center text-center space-y-2'>
        <div className='flex items-center text-gray-500 text-sm'>
          <Copyright className='w-4 h-4 mr-1' />
          <span>2025 - Sohan. All rights reserved.</span>
        </div>
        <div className='flex gap-3 my-2 '>
          <a className='hover:text-primary' href="https://github.com/hey-its-Sohan" ><Github size={24} /></a>
          <a className='hover:text-primary' href="https://www.linkedin.com/in/mahmudul-islam-sohan/" ><Linkedin size={24} /></a>
          <a className='hover:text-primary' href="https://www.facebook.com/mahmudul.islam.sohan.2025/" ><Facebook size={24} /></a>
        </div>
        <p className='text-gray-700 text-sm'>
          Developed and designed with{' '}
          <span role="img" aria-label="love" className="text-red-500">❤️</span> by{' '}
          <a
            href="https://mahmudul-islam-sohan.netlify.app/"
            className="text-primary font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mahmudul Islam Sohan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
