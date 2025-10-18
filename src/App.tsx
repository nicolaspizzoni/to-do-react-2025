import Text from "./components/text"
import TrashIcon from './assets/icons/trashRegular.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import trashIcon from './assets/icons/trashRegular.svg'
import PlusIcon from './assets/icons/plusRegular.svg?react'
import Icon from "./components/icon"
import { Badge } from "./components/badge"
import Button from "./components/button"

function App() {

  return (
    <>
      <Text as="h1" variant="body-md-bold" className="text-pink-base">Hello World</Text>
      <Icon svg={TrashIcon} className="fill-green-base size-5.5"/>
      <Icon svg={SpinnerIcon} animate/>
      <img src={trashIcon} className="fill-green-base size-5.5" alt="" />
      <Badge variant="secondary" textVariant="secondary">5</Badge>
      <Badge variant="primary">2 de 5</Badge>
      <Button icon={PlusIcon}>Nova tarefa</Button>
    </>
  )
}

export default App
