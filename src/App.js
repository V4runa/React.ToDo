import { useState } from "react";

export default function App() {
  const [task, newTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChanges(event) {
    const item = event.target.value;
    newTask(item);
  }
  function handleButton() {
    setTasks((previousItems) => [...previousItems, task]);
  }

  return (
    <div className="App">
      <h1>To-Do</h1>
      <input
        onChange={handleChanges}
        type="text"
        placeholder="enter task"
        value={task}
      />
      <button onClick={handleButton}>
        <span>Add</span>
      </button>
      <div>
        <ul>
          {tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
