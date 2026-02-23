import PropTypes from "prop-types";

function Todo(props) {
  return (
    <>
      <div
        className={`p-6 border-solid border-red-500 border-6 rounded-full mb-4`}
      >
        <div className="min-w-10 min-h-10 text-white text-3xl text-center flex justify-center">
          {props.children}
        </div>
      </div>
      <div className="text-white text-xl text-center font-['lora']">To Do</div>
    </>
  );
}

function InProgress(props) {
  return (
    <>
      <div
        className={`p-6 border-solid border-orange-500 border-6 rounded-full mb-4`}
      >
        <div className="min-w-10 min-h-10 text-white text-3xl text-center flex justify-center">
          {props.children}
        </div>
      </div>
      <div className="text-white text-xl text-center font-['lora']">In Progress</div>
    </>
  );
}

function Completed(props) {
  return (
    <>
      <div
        className={`p-6 border-solid border-green-500 border-6 rounded-full mb-4`}
      >
        <div className="min-w-10 min-h-10 text-white text-3xl text-center flex justify-center">
          {props.children}
        </div>
      </div>
      <div className="text-white text-xl text-center font-['lora']">Completed</div>
    </>
  );
}

export function TasksCounter(props) {
  const { count = 0, type = "todo" } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      {type === "todo" && <Todo>{count}</Todo>}
      {type === "inProgress" && <InProgress>{count}</InProgress>}
      {type === "completed" && <Completed>{count}</Completed>}
    </div>
  );
}

TasksCounter.propTypes = {
  count: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["todo", "inProgress", "completed"]).isRequired,
};