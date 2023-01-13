const Projects = () => {
  return (
    <div>
      <h1 id="app-font">Applications</h1>
      <div id="project-display">
        <section id="top-project">
          <img src="https://i.imgur.com/LtriviY.png" alt="hogwarts" id="img" />
          <div>
            <h1>Live Site:</h1>
            <a
              href="https://salty-taiga-60643.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>https://salty-taiga-60643.herokuapp.com/</h5>
            </a>
          </div>
        </section>
        <section className="projects">
          <img
            src="https://i.imgur.com/zkYFhj1.png"
            alt="blackjack picture"
            id="img"
          />
          <div>
            <h1>Live Site:</h1>
            <a
              href="https://parallel-holiday.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>https://parallel-holiday.surge.sh/</h5>
            </a>
          </div>
        </section>
        {/* <section className="projects">
          <img />
          <p>Marvel Cinematic Universe</p>
        </section> */}
        <section id="bottom-project">
          <img src="https://i.imgur.com/xcxtukb.png" alt="blog" id="img" />
          <div>
            <h1>Live Site:</h1>
            <a
              href="https://still-wave-91765.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>https://still-wave-91765.herokuapp.com</h5>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
