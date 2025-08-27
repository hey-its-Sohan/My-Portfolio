import React from 'react';
import { Link, useNavigate } from 'react-router';
import nameLogo3 from '../assets/nameLogo3.png'
import { ArrowLeft } from 'lucide-react';

const DetailsHeader = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-white/70 mb-10 shadow-sm fixed backdrop-blur-md top-0 left-0 w-full z-50'>
      <div className='max-w-screen-xl mx-auto px-5 lg:px-18'>
        <div className="navbar">
          <div className="navbar-start">
            <Link to={'/'}><img src={nameLogo3} alt="nameLogo" className='w-24  md:w-28' /></Link>
          </div>
          <div className="navbar-end">
            <div>
              <h3
                onClick={() => navigate(-1)}
                className=" lg:text-xl cursor-pointer hover:drop-shadow hover:text-primary flex items-center gap-2"
              >
                <ArrowLeft size={18} /> Back to Projects
              </h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;