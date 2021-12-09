import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div style={{ textAlign: "center"}}>
            <h4>Version 1.0.0</h4>
            <h2>This is an app made in React to illustrate some of the concepts,
                It is linked to a server made with NodeJS, and of course has CRUD operations.
            </h2>
            <Link to="/">Home</Link>
        </div>
    )
}

export default About
