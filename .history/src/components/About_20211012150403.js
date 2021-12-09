import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div style={{ textAlign: "center"}}>
            <h3>Version 1.0.0</h3>
            <br/>
            <h5>This is an app made in React to illustrate some of the concepts,
                It is linked to a server made with NodeJS, and of course has CRUD operations.
            </h5>
            <Link to="/">Home</Link>
        </div>
    )
}

export default About
