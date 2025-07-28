import './Projects.css';

const projectList = [
  {
    title: "Netflix Clone",
    description: "A fully responsive front-end clone of Netflix using React.js with carousels, dark mode, and hover effects.",
    tech: "React.js, CSS, TMDB API",
    github: "https://github.com/kartikeya18-srivastava/Netflix-Clone",
  },
  {
    title: "Voice Assistant",
    description: "Command-based voice assistant that performs tasks like Wikipedia search, YouTube opening, and weather check.",
    tech: "Python, SpeechRecognition, TTS",
    github: "https://github.com/kartikeya18-srivastava/VoiceAssistent",
  },
  
];

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className='projects__typing'>My Projects</h1>
      <div className="projects__grid">
        {projectList.map((project, index) => (
          <div className="project__card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <div className="project__links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
