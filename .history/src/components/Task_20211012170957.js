import { FaPencilAlt, FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle, onClick, onUpdate }) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)} onClick={() => onClick(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)}/> </h3>
            <p>{task.day} <FaPencilAlt style={{ color: "green", cursor: "pointer" }} onClick={ () => onUpdate(task.id) }/> </p>
        </div>
    )
}

export default Task
