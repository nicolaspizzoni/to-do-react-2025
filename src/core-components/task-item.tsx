import { ChangeEvent, FormEvent, useState } from "react";
import CardComponent from "../components/card";
import { InputCheckbox } from "../components/checkbox";
import IconButton from "../components/iconButton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trashRegular.svg?react"
import PencilIcon from "../assets/icons/pencilSimpleRegular.svg?react"
import { InputText } from "../components/input";
import XIcon from "../assets/icons/xRegular.svg?react"
import CheckIcon from "../assets/icons/checkRegular.svg?react"
import { Task, TaskState } from "../models/tasks";
import { cx } from "class-variance-authority";
import { useManageTask } from "../hooks";

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state == TaskState.Creating)
  const [title, setTitle] = useState(task.title || "")
  const { updateTask, updateTaskStatus, deleteTask } = useManageTask()

  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  function saveTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    updateTask(task.id, { title: title })
    setIsEditing(false)
  }

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditing() {
    if (task.state == TaskState.Creating) {
      deleteTask(task?.id)
    }
    setIsEditing(false)
  }

  function handleChangeStatus(e: ChangeEvent<HTMLInputElement>) {
    updateTaskStatus(task?.id, e.target.checked)
  }

  function handleDeleteTask() {
    deleteTask(task?.id)
  }

  return (
    <CardComponent size="md" className="[&>*]:flex [&>*]:gap-4">
      {
        !isEditing ?
          <div>
            <InputCheckbox checked={task?.concluded} onChange={handleChangeStatus} />
            <Text className={cx("flex-1", {
              'line-through': task?.concluded
            })}>{task?.title}</Text>
            <div className="flex gap-1">
              <IconButton icon={TrashIcon} variant="tertiary" onClick={handleDeleteTask} />
              <IconButton onClick={handleEditTask} icon={PencilIcon} variant="tertiary" />
            </div>
          </div>
          :
          <form onSubmit={saveTask}>
            <InputText value={title} className="flex-1" onChange={handleChangeTitle} autoFocus required />
            <div className="flex gap-1">
              <IconButton type="button" onClick={handleExitEditing} icon={XIcon} variant="secondary" />
              <IconButton type="submit" icon={CheckIcon} />
            </div>
          </form>
      }
    </CardComponent>
  )
}