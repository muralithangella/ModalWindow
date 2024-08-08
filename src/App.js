import "./styles.css";
import ModalDialog from "./Components/ModalDialog";
import { useEffect, useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="App">
      <header>
        <h1>Modal</h1>
      </header>
      <button
        type="submit"
        variant="primary"
        style={{
          color: "white",
          backgroundColor: "blue",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "large",
        }}
        onClick={handleSubmit}
        className="Modal_Submit"
      >
        Modal Window
      </button>
      {show ? <ModalDialog handleClose={handleClose} /> : ""}
    </div>
  );
}
