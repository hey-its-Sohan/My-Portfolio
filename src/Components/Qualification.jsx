import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import React, { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      title: 'B.Sc. in CSE',
      place: 'BRAC University',
      year: 'Fall 2022 - Present',
      desc: 'Currently pursuing Bachelor of Science in Computer Science and Engineering.',
    },
    {
      title: 'HSC',
      place: 'Nawabganj Govt. College',
      year: '2019 - 2021',
      desc: 'Completed Higher Secondary Certificate with distinction in science.',
    },
    {
      title: 'SSC',
      place: 'Harimohan Govt. High School',
      year: '2014 - 2019',
      desc: 'Completed Secondary School Certificate with science background.',
    },


  ];

  const experience = [
    {
      title: 'Full-Stack Personal Project',
      place: 'RedDrop – Blood Donation Platform',
      year: '2025',
      desc: 'Developed a full-featured blood donation platform with user role management, real-time donation requests, admin dashboard, and Stripe integration for funding. Built using the MERN stack and Firebase.',
    },
    {
      title: 'Full-Stack Personal Project',
      place: 'Rent Buddy',
      year: '2025',
      desc: 'Created a roommate and rental finder app with location-based features and profile matching, optimized for mobile users. Implemented frontend using React, Tailwind, and Firebase.',
    },
    {
      title: 'Full-Stack Personal Project',
      place: 'ShareBite',
      year: '2025',
      desc: 'Built a community-driven food sharing platform to connect donors with nearby recipients and reduce food waste. Focused on backend API integration and MongoDB data modeling.',
    },
    {
      title: 'Frontend Mini Project',
      place: 'UtiPay BD',
      year: '2025',
      desc: 'Designed a modern UI for a utility bill payment app with secure Firebase authentication. Focused on responsive design and clean UX.',
    },
  ];


  const currentTimeline = activeTab === 'education' ? education : experience;

  return (
    <div id='qualification' className="max-w-screen-xl scroll-mt-14 mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold text-center">Qualification</h2>
      <p className="text-center text-gray-500 mt-2">Select between Education and Experience ↓</p>

      {/* Toggle Tabs */}
      <div className="flex justify-center gap-4 my-6">
        <div
          onClick={() => setActiveTab('education')}
          className={`flex items-center gap-2 text-xl ${activeTab === 'education' ? 'text-primary font-semibold' : 'text-gray-500 hover:text-primary cursor-pointer'}`}
        >
          <GraduationCap /> Education
        </div>
        <div
          onClick={() => setActiveTab('experience')}
          className={`flex items-center gap-2 text-xl ${activeTab === 'experience' ? ' text-primary font-semibold' : 'text-gray-500 hover:text-primary cursor-pointer'}`}
        >
          <BriefcaseBusiness /> Experience
        </div>
      </div>

      {/* Timeline */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
        {currentTimeline.map((item, index) => (

          <li key={index} >
            {index !== 0 && <hr />}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className={`mb-10 mx-3 ${index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'}`}
              data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
              data-aos-delay={index * 100}>

              <div className="text-lg font-bold">{item.title}</div>
              <div className="  font-medium">{item.place}</div>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              <div className="mt-2 inline-flex items-center gap-2 text-gray-500">
                <FaCalendarAlt className="text-sm font-mono italic" />
                <time className="font-mono italic text-sm">{item.year}</time>
              </div>


            </div>
            <hr className=' bg-gray-300' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Qualification;
