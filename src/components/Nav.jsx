import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div id='nav'>
            <h2 id="name">Edward Yuabov</h2>
            <h2 id="title">Software Engineer</h2>
            <div id="links">
                <Link to = '/'><h3 className="nav-font">Home</h3></Link>
                <Link to = '/projects'><h3 className="nav-font">Projects</h3></Link>
                <a 
                href="https://docs.google.com/document/d/1DVT0-fNo3kYleiR-_dJPom5PQoEmey-wAqZJ0GNS3_4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <h3 className="nav-font">Resume</h3>
                </a>
            </div>
        </div>
    )
}

export default Nav