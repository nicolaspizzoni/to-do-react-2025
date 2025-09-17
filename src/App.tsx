import Text from "./components/text"
import TrashIcon from './assets/icons/trashRegular.svg?react'
import trashIcon from './assets/icons/trashRegular.svg'

function App() {

  return (
    <>
      <Text as="h1" variant="body-md-bold" className="text-pink-base">Hello World</Text>
      <TrashIcon className="fill-green-base size-5.5"/>
      <img src={trashIcon} className="fill-green-base size-5.5" alt="" />
    </>
  )
}

export default App
