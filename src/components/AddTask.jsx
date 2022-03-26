import { useState } from "react";
import "./AddTask.css";
import Button from "./UI/Button";
import Error from "./UI/Error";

const AddTask = ({ handleTaskAdd }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState();

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (task.trim().length === 0) {
      setError({
        title: "Um erro foi encontrado",
        message: "O campo para preenchimento não pode ser vazio",
      });
    } else {
      handleTaskAdd(task);
    }
    setTask("");
  };

  const taskChangeHandler = (e) => {
    // console.log(e.target.value)
    setTask(e.target.value);
  };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <>
    {error && (<Error title={error.title} message={error.message} onConfirm={errorHandler}/>)}
      <div className="add-task-container">
        <input
          className="add-task-input"
          type="text"
          id="addTask"
          name="addTask"
          placeholder="Adicionar atividade"
          value={task}
          onChange={taskChangeHandler}
        />
        <div className="add-task-button-container">
          <Button onClick={addTaskHandler}>Adicionar</Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
