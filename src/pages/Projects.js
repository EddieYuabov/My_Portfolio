const Projects = () => {
  return (
    <div>
      <h1 id="app-font">Applications</h1>
      <div id="project-display">
        <section id="top-project">
          <img src="https://i.imgur.com/LtriviY.png" alt="hogwarts" id="img" />
          <div>
            <h1>Hogwarts</h1>
            <p>
              Developed application displaying all fictional students attending
              hogwarts,
              <br />
              including their professor and grades
            </p>
            <h1>Technologies used</h1>
            <p>Languages: HTML5, CSS3, Javascript</p>
            <p>Node.js with express</p>
            <p>Sequelize server for database managment</p>
            <button className="link-button">
              <a
                href="https://salty-taiga-60643.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="live-site">Live Site</h1>
              </a>
            </button>
          </div>
        </section>
        <section className="projects">
          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="marvel picture"
            id="img"
          />
          <div>
            <h1>Marvel Cinematic Universe</h1>
            <p>
              Application that displays all the movies from the Marvel cinematic
              universe
              <br />
              that includes information on the movies along with their
              respective trailers
            </p>
            <h1>Technologies used</h1>
            <p>Languages: HTML5, CSS3, Javascript</p>
            <button className="link-button">
              <a
                href="https://mcu.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="live-site">Live Site</h1>
              </a>
            </button>
          </div>
        </section>
        <section className="projects">
          <img
            src="https://i.imgur.com/zkYFhj1.png"
            alt="blackjack picture"
            id="img"
          />
          <div>
            <h1>Blackjack</h1>
            <p>
              A virtual card game in which a CPU deals cards to the player
              <br />
              The objective is to have a deck of cards which has a sum closest
              to the number 21
            </p>
            <h1>Technologies used</h1>
            <p>Languages: HTML5, CSS3, Javascript</p>
            <button className="link-button">
              <a
                href="https://parallel-holiday.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="live-site">Live Site</h1>
              </a>
            </button>
          </div>
        </section>
        <section id="bottom-project">
          <img src="https://i.imgur.com/xcxtukb.png" alt="blog" id="img" />
          <div>
            <h1>BLOG</h1>
            <p>
              A website where the user can post blogs about their day to day
              life... with pictures!!
            </p>
            <h1>Technologies used</h1>
            <p>Languages: HTML5, CSS3, Javascript</p>
            <p>Node.js with express</p>
            <p>MongoDB with Mongoose for database management</p>
            <button className="link-button">
              <a
                href="https://still-wave-91765.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="live-site">Live Site</h1>
              </a>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
