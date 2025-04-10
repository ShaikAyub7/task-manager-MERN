import CreateTaskForm from "./CreateTaskForm";
import Modal from "./MOdal";

const CreateTask = () => {
  return (
    <div className="p-4 max-w-4xl m-auto ">
      {/* <Modal name={"New Task"} component={<CreateTask />} /> */}
      <CreateTaskForm />
    </div>
  );
};

export default CreateTask;
