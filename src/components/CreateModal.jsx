import React from "react";
import { IoAddSharp } from "react-icons/io5";

const Modal = ({ id, name, component }) => {
  const modalId = `modal_${id}`;

  return (
    <div>
      <button
        className="btn bg-blue-500 btn-sm text-white fixed bottom-6 right-5 z-40000000  p-6 rounded-xl shadow-md"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        <IoAddSharp className="text-2xl" />
        <span className="ml-1">New Task </span>
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box bg-white ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            {component}
            <div className="modal-action">
              <button
                className="btn btn-secondary"
                onClick={() => document.getElementById(modalId).close()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
