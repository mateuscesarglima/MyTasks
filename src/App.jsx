import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import Tasks from "./components/Tasks";
import Header from "./components/UI/Header";

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
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAdd={handleTaskAdd} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/details" exact element={<TaskDetails/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
