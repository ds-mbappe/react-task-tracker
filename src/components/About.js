import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div style={{ textAlign: "center"}}>
            <h3>Version 1.0.0</h3>
                <br/>
            <h4>This is an app made in React to illustrate some of its concepts.
                The is linked to a NodeJS Server, the database is in JSON and it's able to perform CRUD operations.
            </h4>
            <p>
                With this simple To-Do List App, the user can always know what he has planned to do.
                <br/>
                The list of features of the App:
            </p>
            <ul>
                <li>Add a new task to the list (with the date the task is due by);</li>
                <li>List all the existing tasks;</li>
                <li>Mark a task as important, which results in it having a color indicator next to it;</li>
                <li>Delete a task.</li>
            </ul>
                <br/>
            <Link to="/">Home</Link>
        </div>
    )
}

export default About
