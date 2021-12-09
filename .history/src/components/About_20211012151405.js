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
                With this Task Tracker App, the user can always know what he has planned to do.
                The list of features of the App is as follows:
                - Add a new task to the list (along with de date the task is due by);
                - List all the existing tasks;
                - Update an existing task;
                - Delete task(s).
            </p>
                <br></br>
            <Link to="/">Home</Link>
        </div>
    )
}

export default About
