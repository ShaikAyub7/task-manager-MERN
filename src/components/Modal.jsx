import React from "react";
import UpdateTask from "./UpdateTask";
const Modal = ({ id }) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Update
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-amber-50 grid">
          <div className="max-w-5xl m-auto">
            <UpdateTask id={id} />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-secondary">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
