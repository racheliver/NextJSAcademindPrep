import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
