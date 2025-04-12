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
          <div className="w-full h-full flex flex-col justify-center items-center">
            {component}
            <div className="modal-action">
              <form method="dialog " className="flex justify-center">
                <button className="btn btn-secondary  ">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
