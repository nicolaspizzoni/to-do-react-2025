import Button from "../components/button";
import PlusIcon from "../assets/icons/plusRegular.svg?react"
import TaskItem from "./task-item";
import { useManageTask, useTasks } from "../hooks";
import { TaskState } from "../models/tasks";


export default function TasksList() {
  const { tasks, isLoadingTasks } = useTasks()
  const { prepareTask } = useManageTask()

  console.log(tasks)

  function handleNewTask() {
    prepareTask()
  }

  return (
    <>
      <section>
        <Button disabled={tasks.some(task => task?.state == TaskState.Creating) || isLoadingTasks} icon={PlusIcon} className="w-full" onClick={handleNewTask}>
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {
          !isLoadingTasks && tasks.slice().reverse().map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        }
        {
          isLoadingTasks && [1, 2, 3].map(() => (
            <TaskItem loading={isLoadingTasks} />
          ))
        }
      </section>
    </>
  )
}