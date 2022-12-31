const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div id="project-display">
        <section className="projects">
          <img />
          <p>BlackJack</p>
        </section>
        <section className="projects">
          <img />
          <p>Marvel Cinematic Universe</p>
        </section>
        <a
          href="https://still-wave-91765.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <section className="projects">
            <img />
            <p>Blog</p>
          </section>
        </a>
        <a
          href="https://salty-taiga-60643.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <section className="projects">
            <img />
            <p>Hogwarts</p>
          </section>
        </a>
      </div>
    </div>
  )
}

export default Projects
