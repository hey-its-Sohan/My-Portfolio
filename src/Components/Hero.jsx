import { Facebook, Github, Linkedin } from 'lucide-react';
import React from 'react';
import profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div id='home' className='max-w-screen-xl scroll-mt-24 mx-auto px-6 lg:px-20 my-36 lg:my-48'>
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">
        <div className="flex gap-10 items-center"

        >
          <div className="flex flex-col gap-5 text-2xl text-primary" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <a href="https://github.com/hey-its-Sohan" ><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/mahmudul-islam-sohan/" ><Linkedin size={28} /></a>
            <a href="https://www.facebook.com/mahmudul.islam.sohan.2025/" ><Facebook size={28} /></a>
          </div>
          <div>
            <h1 className="text-4xl font-bold" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">MD. Mahmudul Islam Sohan</h1>
            <h3 className="text-xl text-gray-600 my-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">MERN Stack Developer</h3>
            <p className="text-gray-700" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              I’m a MERN Stack developer with a passion for building clean, <br /> responsive, and scalable web apps.
            </p>
            <a href="#projects" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500"><button className='btn btn-primary text-lg mt-3'>Projects</button></a>
          </div>
        </div>

        <div>
          <div
            className="w-[300px] h-[300px] bg-center bg-cover relative "
            data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
            style={{
              backgroundImage: `url(${profile})`,
              animation: "profileAnim 8s ease-in-out infinite",
              borderRadius: " 60% 40% 30% 70% / 60% 30% 70% 40%",
              boxShadow: " 0 0 0 9px rgba(255,255,255,0.3)",

            }}
          ></div>
        </div>

        {/* Keyframes style tag */}
        <style>
          {`
          @keyframes profileAnim {
            0% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            50% {
              border-radius: 30% 60% 70% 40%/ 50% 60% 30% 60%;
            }
            100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default Hero;
