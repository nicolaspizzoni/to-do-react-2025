import Text from "../components/text"
import TrashIcon from '../assets/icons/trashRegular.svg?react'
import SpinnerIcon from '../assets/icons/spinner.svg?react'
import trashIcon from '../assets/icons/trashRegular.svg'
import PlusIcon from '../assets/icons/plusRegular.svg?react'
import Icon from "../components/icon"
import { Badge } from "../components/badge"
import Button from "../components/button"
import IconButton from "../components/iconButton"
import SkeletonComponent from "../components/skeleton"
import { InputCheckbox } from "../components/checkbox"

export default function PageComponents() {
  return (
    <>
      <Text as="h1" variant="body-md-bold" className="text-pink-base">Hello World</Text>
      <Icon svg={TrashIcon} className="fill-green-base size-5.5" />
      <Icon svg={SpinnerIcon} animate />
      <img src={trashIcon} className="fill-green-base size-5.5" alt="" />
      <div className="flex gap-2">
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
        <Badge loading>2 de 5</Badge>
      </div>
      <Button icon={PlusIcon}>Nova tarefa</Button>
      <div className="flex gap-2">
        <IconButton icon={TrashIcon} variant={"secondary"} />
        <IconButton loading icon={TrashIcon} />
      </div>
      <div className="flex gap-2">
        <InputCheckbox />
        <InputCheckbox loading />
      </div>
      <SkeletonComponent className="h-6" />
      <SkeletonComponent />
    </>
  )
}