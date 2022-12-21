import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div id='nav'>
            <h2>Edward Yuabov</h2>
            <h2>Software Engineer</h2>
            <div id="links">
                <Link to = '/'><h3 className="nav-font">Home</h3></Link>
                <Link to = '/projects'><h3 className="nav-font">Projects</h3></Link>
                <Link to ='/resume'><h3 className="nav-font">Resume</h3></Link>
            </div>
        </div>
    )
}

export default Nav