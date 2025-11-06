import ContainerComponent from "../components/container";
import TasksList from "../core-components/tasks-list";
import TasksSummary from "../core-components/tasks-summary";

export default function PageHome() {
  return <ContainerComponent as="article" className="space-y-3">
    <header className="flex items-center justify-between">
      <TasksSummary />
    </header>
    <TasksList />
  </ContainerComponent>
}