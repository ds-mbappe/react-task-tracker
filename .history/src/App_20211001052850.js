import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
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
            },
            {
                id: 3,
                text: "Java EE project",
                day: "October 26",
                reminder: false,
            }
        ]
    )

  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toogle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks to show..."}
    </div>
  );
}

export default App;
