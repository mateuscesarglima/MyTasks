import Button from "./Button";
import "./Error.css";

const Error = ({ title, message, onConfirm }) => {
  return (
    <div className="backdrop">
      <div className="error-container">
        <header>
          <h2>{title}</h2>
        </header>
        <p>{message}</p>
        <footer>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default Error;
