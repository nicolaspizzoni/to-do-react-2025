import useLocalStorage from "use-local-storage";
import { Task, TASKS_KEY, TaskState } from "../models/tasks";

export function useManageTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    const id = Math.random().toString(36).substring(2, 9);
    setTasks([
      ...tasks,
      {
        id,
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  function updateTask(id: string, payload: { title: Task["title"] }) {
    setTasks(
      tasks.map((task) =>
        task.id == id
          ? {
              ...task,
              ...payload,
              state: TaskState.Created,
            }
          : task
      )
    );
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id == id ? { ...task, concluded } : task))
    );
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask
  };
}
