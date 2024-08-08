import { useEffect } from "react";

const ModalDialog = ({ handleClose }) => {
  useEffect(() => {
    function onKeyDown(event) {
      console.log("event.KeyCode", event.keyCode);
      if (event.keyCode === 13) {
        console.log("event.KeyCode", event.keyCode);
        handleClose();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });
  return (
    <div className="Modal-Dialog">
      <div className="Modal-Header">
        <span className="Modal-Title">Modal Title</span>
        <span className="Modal-Close" onClick={handleClose}>
          ×
        </span>
      </div>
      <div className="modal-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
        recusandae? Nobis tenetur nostrum eos voluptatum delectus pariatur
        ducimus excepturi tempora eius consequuntur quos repudiandae eaque, quam
        incidunt provident sint nemo.
      </div>
    </div>
  );
};

export default ModalDialog;
