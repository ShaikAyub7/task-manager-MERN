import CreateModal from "./CreateModal";
import CreateTaskForm from "./CreateTaskForm";

const CreateTask = () => {
  return (
    <div className=" max-w-4xl m-auto ">
      <CreateModal component={<CreateTaskForm />} />
    </div>
  );
};

export default CreateTask;
