import { Copyright } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-sky-200/20 mt-10'>
      <div className='max-w-screen-xl mx-auto px-5 py-5'>
        <div className="flex w-full flex-col">
          <div className="divider text-gray-500 font-medium"><Copyright className='w-14 h-7 text-gray-400' />2025 - Sohan</div>
          <h3 className='text-xl font-medium text-center'>Developed and designed with love ❤️</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;