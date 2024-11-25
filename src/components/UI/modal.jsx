import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="	z-20 fixed w-full h-full" onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return (
    <div className="z-30 fixed bg-gray-50	rounded-xl	p-4  top-72	left-72 w-1/2 h-40	">
      <div className="text-xl	">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
