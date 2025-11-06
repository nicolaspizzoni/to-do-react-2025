import { useState } from "react";
import CardComponent from "../components/card";
import { InputCheckbox } from "../components/checkbox";
import IconButton from "../components/iconButton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trashRegular.svg?react"
import PencilIcon from "../assets/icons/pencilSimpleRegular.svg?react"
import { InputText } from "../components/input";
import XIcon from "../assets/icons/xRegular.svg?react"
import CheckIcon from "../assets/icons/checkRegular.svg?react"

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditing() {
    setIsEditing(false)
  }

  return (
    <CardComponent size="md" className="flex gap-4">
      {
        !isEditing ?
          <>
            <InputCheckbox />
            <Text className="flex-1">🛒 Fazer compras do mês</Text>
            <div className="flex gap-1">
              <IconButton icon={TrashIcon} variant="tertiary" />
              <IconButton onClick={handleEditTask} icon={PencilIcon} variant="tertiary" />
            </div>
          </>
          :
          <>
            <InputText className="flex-1" />
            <div className="flex gap-1">
              <IconButton onClick={handleExitEditing} icon={XIcon} variant="secondary" />
              <IconButton icon={CheckIcon} />
            </div>
          </>
      }
    </CardComponent>
  )
}