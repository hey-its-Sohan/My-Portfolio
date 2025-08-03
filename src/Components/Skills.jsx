import React from 'react';

const skills = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js'],
    aos: 'fade-up',
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB',],
    aos: 'fade-up',
  },
  {
    title: 'Languages & Tools',
    items: ['Python', 'JavaScript', 'Git', 'GitHub', 'VS Code'],
    aos: 'fade-up',
  },
];

const Skills = () => {
  return (
    <div id='skills' className="max-w-screen-xl scroll-mt-14 mx-auto px-5 lg:px-20 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-primary rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            data-aos={skill.aos}
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold text-primary mb-3">{skill.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
