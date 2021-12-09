import { useState } from "react"

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const [taskText, setTaskText] = useState('')
    const [taskDay, setTaskDay] = useState('')
    const [taskReminder, setTaskReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task!')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    const onTextChange = (e) => {
        setTaskText(taskText)
        setTaskDay(taskDay)
        setTaskReminder(taskReminder)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>New Task</label>
                <input type="text" placeholder="Task name" value={text} onChange={(e) => setText(e.target.value)} onChange={(e) => onTextChange(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day</label>
                <input type="text" placeholder="Add day" value={day} onChange={(e) => setDay(e.target.value)} onChange={(e) => onTextChange(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} onChange={(e) => onTextChange(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
