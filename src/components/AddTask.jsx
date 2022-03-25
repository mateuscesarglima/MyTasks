import { useState } from "react";
import "./AddTask.css";
import Button from "./UI/Button";

const AddTask = ({handleTaskAdd}) => {
  const [task, setTask] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();
    handleTaskAdd(task);
    setTask("")
  };

  const taskChangeHandler = (e) => {
    // console.log(e.target.value)
    setTask(e.target.value);
  };

  return (
    <div className="add-task-container">
      <input
        className="add-task-input"
        type="text"
        id="addTask"
        name="addTask"
        placeholder="Add task"
        value={task}
        onChange={taskChangeHandler}
      />
      <div className="add-task-button-container">
        <Button onClick={addTaskHandler}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
