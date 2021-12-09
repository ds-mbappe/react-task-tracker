import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle, onClick, onUpdate }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onClick={onClick}
                    onUpdate={onUpdate}
                />
            ))}
        </>
    )
}

export default Tasks
