import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
                id: 1,
                text: "Java EE project",
                day: "October 26",
                reminder: false,
            }
        ]
    )

  
  // Delete Task
  const deleteTask = (id) => {
    console.log("deleted", id);
  }
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
