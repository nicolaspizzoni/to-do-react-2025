import useLocalStorage from "use-local-storage";
import { TASKS_KEY, Task, TaskState } from "../models/tasks";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setTasks(tasksData);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state == TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks
  };
}
