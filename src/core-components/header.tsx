import ContainerComponent from "../components/container";
import Logo from '../assets/images/logoToDo.svg?react'

export default function Header() {
  return (
    <ContainerComponent as="header" className="mt-3 md:mt-20">
      <Logo />
    </ContainerComponent>
  )
}