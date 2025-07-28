import './Skills.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'Bootstrap',
  'Python',
  'Git & GitHub',
  'MySQL',
  'MongoDB',
  'C/C++',
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__heading">
        <span className='skills__typing'>My Skills</span>
      </h2>
      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div className="skill__card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
