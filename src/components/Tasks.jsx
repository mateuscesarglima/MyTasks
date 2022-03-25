import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
        </div>
      ))}
    </>
  );
};

export default Tasks;
