import React from 'react';
import {
  FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaGithub, FaHtml5,
  FaCss3Alt, FaJs, FaCode, FaTerminal
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiAxios, SiVercel, SiNetlify, SiMysql
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: 'Frontend',
    titleIcon: <FaCode className="w-6 h-6 text-primary" />,
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    ],
    aos: 'fade-up',
  },
  {
    title: 'Backend & Database',
    titleIcon: <FaDatabase className="w-6 h-6 text-primary" />,
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
    ],
    aos: 'fade-up',
  },
  {
    title: 'Tools & Platforms',
    titleIcon: <FaTerminal className="w-6 h-6 text-primary" />,
    items: [
      { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Firebase Auth', icon: <SiFirebase className="text-yellow-400" /> },
      { name: 'Axios', icon: <SiAxios className="text-sky-500" /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Netlify', icon: <SiNetlify className="text-green-500" /> },
      { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
    ],
    aos: 'fade-up',
  },
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-screen-xl scroll-mt-14 mx-auto px-5 lg:px-20 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-primary rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
            data-aos={skill.aos}
            data-aos-delay={index * 100}
          >
            <div className="flex items-center gap-3 mb-5">
              {skill.titleIcon}
              <h3 className="text-xl font-semibold ">{skill.title}</h3>
            </div>
            <ul className="space-y-3 flex flex-wrap gap-3">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 border border-primary/20 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-primary hover:text-white  transition-all font-medium text-base">
                  <span className="text-2xl">{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
