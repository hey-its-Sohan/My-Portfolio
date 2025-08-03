import React from 'react';

const About = () => {
  return (
    <div id='about' className="max-w-screen-md scroll-mt-14 mx-auto px-5 py-16" data-aos="fade-right" data-aos-duration="1200">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <p className="text-gray-600 mt-6 text-lg leading-relaxed text-center">
        Hey! I'm <span className="text-primary font-semibold">Mahmudul Islam Sohan</span>, a passionate <span className="font-medium">MERN stack developer</span> who loves turning ideas into clean, functional web applications.
        I enjoy working with <span className="font-medium">React.js, Node.js, Express.js, MongoDB</span>, and styling with <span className="font-medium">Tailwind CSS</span>.
      </p>
      <p className="text-gray-600 mt-4 text-lg leading-relaxed text-center">
        I’ve built projects like <span className="font-medium">RedDrop</span> (a blood donation platform), <span className="font-medium">ShareBite</span> (a food-sharing app), and <span className="font-medium">UtiPay BD</span> (a utility bill manager) — all focused on solving real-world problems.
      </p>
      <p className="text-gray-600 mt-4 text-lg leading-relaxed text-center">
        Currently open to <span className="font-medium">internships or junior roles</span>, where I can contribute, learn, and grow alongside an awesome team.
      </p>
    </div>
  );
};

export default About;
