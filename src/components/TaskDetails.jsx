import Button from "./UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import './TaskDetails.css'

const TaskDetails = () => {

  const navigate = useNavigate();
  // Retorna parâmetros
  const params = useParams();
    console.log(params)
  const backHomePageHandle = () => {
    navigate("/");
  };

  return (
    <>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          unde, mollitia dolores deserunt quas rem?
        </p>
      </div>
      <div className="back-button-container">
        <Button onClick={backHomePageHandle}>Voltar</Button>
      </div>
    </>
  );
};

export default TaskDetails;
