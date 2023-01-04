const Projects = () => {
  return (
    <div>
      <div id="project-display">
        <a
          href="https://salty-taiga-60643.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <section id="top-project">
            <img
              src="https://i.imgur.com/LtriviY.png"
              alt="hogwarts"
              id="img"
            />
            <p>Hogwarts</p>
          </section>
        </a>
        <a
          href="https://parallel-holiday.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <section className="projects">
            <img
              src="https://i.imgur.com/zkYFhj1.png"
              alt="blackjack picture"
              id="img"
            />
            <p>BlackJack</p>
          </section>
        </a>
        {/* <section className="projects">
          <img />
          <p>Marvel Cinematic Universe</p>
        </section> */}
        <a
          href="https://still-wave-91765.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <section id="bottom-project">
            <img src="https://i.imgur.com/xcxtukb.png" alt="blog" id="img" />
            <p>Blog</p>
          </section>
        </a>
      </div>
    </div>
  )
}

export default Projects
