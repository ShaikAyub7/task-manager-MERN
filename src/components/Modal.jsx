import React from "react";

const Modal = ({ id, name, component }) => {
  const modalId = `modal_${id}`;

  return (
    <div>
      <button
        className="btn bg-blue-500 btn-sm text-white"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        {name}
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box bg-white ">
          <div className=" flex  justify-center items-center">{component}</div>
          <div className="modal-action">
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById(modalId).close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
