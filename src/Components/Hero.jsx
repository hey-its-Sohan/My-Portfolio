import { Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react';
import profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-6 lg:px-20 my-20'>
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">
        <div className="flex gap-10 items-center">
          <div className="flex flex-col gap-5 text-2xl text-primary">
            <Linkedin />
            <Github />
            <Instagram />
          </div>
          <div>
            <h1 className="text-4xl font-bold">MD. Mahmudul Islam Sohan</h1>
            <h3 className="text-xl text-gray-600 my-3">CSE @ BRAC University</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione in natus autem <br /> odio iusto earum obcaecati maiores adipisci fuga est.
            </p>
          </div>
        </div>

        <div>
          <div
            className="w-[300px] h-[300px] bg-center bg-cover relative "
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
