import { useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: "Finish the Cloud Computing work",
                day: "October 3rd",
                reminder: true,
            },
            {
                id: 2,
                text: "Finish the Linux Homework",
                day: "October 5th",
                reminder: true,
            }    ,
            {
                id: 1,
                text: "Java EE project",
                day: "October 26",
                reminder: false,
            }
        ]
    )

    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
