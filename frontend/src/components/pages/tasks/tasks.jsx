import { useEffect, useState } from "react";
import { FilterBar } from "@/components/filterBar/filterBar.jsx";
import { Task } from "@/components/task/task.jsx";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar.jsx";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter.jsx";
import { getTasks, deleteTask, updateTask } from "@/services/tasks.service";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  async function fetchTasks() {
    setLoading(true);
    try {
      const res = await getTasks({ page, limit: 10, order });
      setTasks(res.data);
      setPagination(res.pagination);
    } catch {
      setTasks([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
  }, [page, order]);

  async function handleUpdateTask(updatedTask) {
    await updateTask(updatedTask);
    fetchTasks();
  }

  async function handleDeleteTask(id) {
    await deleteTask(id);
    fetchTasks();
  }

  const meta = pagination?.meta;

  return (
    <section className="flex flex-row w-full p-4 gap-8 min-h-screen">
      <section className="flex basis-2/3 justify-center">
        <div className="flex flex-col w-4/5 p-4 items-center">
          <h1 className="text-white text-2xl mb-8 w-full font-['lora']">
            Tasks as on: {today}
          </h1>
          <div className="w-11/12 flex flex-col">
            <div className="flex justify-between mb-16">
              <TasksCounter count={meta?.todoTasks ?? 0} type="todo" />
              <TasksCounter count={meta?.inProgressTasks ?? 0} type="inProgress" />
              <TasksCounter count={meta?.completedTasks ?? 0} type="completed" />
            </div>

            <FilterBar
              page={page}
              totalPages={meta?.totalPages ?? 1}
              order={order}
              onPageChange={setPage}
              onOrderChange={(val) => { setOrder(val); setPage(1); }}
            />

            {loading && (
              <p className="text-zinc-400 text-center mt-8">Loading tasks…</p>
            )}

            {!loading && tasks.length === 0 && (
              <p className="text-zinc-400 text-center mt-8">No tasks yet. Create one!</p>
            )}

            {!loading && tasks.map((task) => (
              <Task
                key={task._id}
                _id={task._id}
                title={task.title}
                description={task.description}
                status={task.status}
                priority={task.priority}
                dueDate={new Date(task.dueDate)}
                onUpdate={handleUpdateTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        </div>
      </section>

      <TaskSidebar onTaskCreated={fetchTasks} />
    </section>
  );
}
