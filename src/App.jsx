import { useState } from "react";


import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/UI/Header";

import "./App.css";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      complete: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
    {
      id: "3",
      title: "Programar",
      completed: true,
    },
  ]);
  // let messages = 'Hello world'

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
      //Tudo que está dentro de tasks e adiciona a nova taskTitle com
      // um novo id sendo inserido pela função Math.Random()
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header/>
      <AddTask handleTaskAdd={handleTaskAdd} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
    </div>
  );
};

export default App;
