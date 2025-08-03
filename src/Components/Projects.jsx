import React from 'react';
import redDropImg from '../assets/RedDrop.png';
import rentBuddyImg from '../assets/RentBuddy.png';
import shareBiteImg from '../assets/ShareBite.png';
import utiPayImg from '../assets/UtiPay.png';

const Projects = () => {
  const projects = [
    {
      name: 'RedDrop',
      image: redDropImg,
      des: 'A full-featured blood donation platform with user roles, dashboards, Stripe integration for funding, and real-time donation request management.',
      stack: ['React.js', 'Node.js', 'MongoDB'],
      github: '',
      liveLink: 'https://red-drop-web.netlify.app/',
    },
    {
      name: 'Rent Buddy',
      image: rentBuddyImg,
      des: 'A roommate and rental finder app built for students and young professionals, featuring user profiles and location-based matching.',
      stack: ['React.js', 'Node.js', 'MongoDB'],
      github: '',
      liveLink: 'https://rent-buddy-web.netlify.app/',
    },
    {
      name: 'ShareBite',
      image: shareBiteImg,
      des: 'A community food-sharing platform designed to reduce food waste by connecting donors with nearby recipients.',
      stack: ['React.js', 'Node.js', 'MongoDB'],
      github: '',
      liveLink: 'https://share-bite-web.netlify.app/',
    },
    {
      name: 'UtiPay BD',
      image: utiPayImg,
      des: 'A secure and efficient web app to manage and pay utility bills online.',
      stack: ['React.js', 'Node.js', 'MongoDB'],
      github: '',
      liveLink: 'https://utipay-bd.netlify.app/',
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <p className="text-center mt-3 mb-10 text-gray-500 text-lg">These are some recent projects I’ve built using the MERN stack and modern tools.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div key={index} className="card bg-white shadow-md w-96 hover:shadow-xl transition duration-300">
            <figure >
              <img src={project.image} alt={project.name} className='h-48' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p className="text-sm text-gray-600">{project.des}</p>
              <div className="card-actions mt-4 justify-between">
                <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  GitHub
                </a>
                <a href={project.liveLink || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary btn-sm">
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
