const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task"/>
            </div>
            <div className="form-control">
                <label>Day</label>
                <input type="text" placeholder="Add day"/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"/>
            </div>

            <input type="submit" value="save task" />
        </form>
    )
}

export default AddTask
