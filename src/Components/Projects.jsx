import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import projects from '../Data/Projects'

const Projects = () => {


  return (
    <div id='projects' className="max-w-screen-xl scroll-mt-14 mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <p className="text-center mt-3 mb-10 text-gray-500 text-lg">These are some recent projects I’ve built using the MERN stack and modern tools.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center lg:px-20">
        {projects.map((project, index) => (
          <div key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="600"
            className="card bg-white shadow-md w-[350px] lg:w-96 hover:shadow-xl transition duration-300">
            <figure >
              <img src={project.image} alt={project.name} className='h-48' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p className="text-sm text-gray-600">{project.des}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className='font-semibold'>Techs :</span> {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{tech}</span>
                ))}
              </div>

              <div className="card-actions mt-4 justify-between">
                <Link to={`/project-details/${project.id}`} state={project}><button className='btn btn-primary btn-sm text-white'>View Details</button></Link>
                <Link href={project.liveLink || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary btn-sm">
                  <FaExternalLinkAlt /> Live
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
