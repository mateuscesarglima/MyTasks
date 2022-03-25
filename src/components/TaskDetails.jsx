import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const navigate = useNavigate();

  const backHomePageHandle = () => {
    navigate("/");
  };

  return (
    <>
      <div className="task-details-container">
        <p></p>
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
