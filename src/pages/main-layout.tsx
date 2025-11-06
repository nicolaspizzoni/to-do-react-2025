import { Outlet } from "react-router";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";
import Footer from "../core-components/footer";

export default function MainLayout() {
  return (
    <div className="mx-4">
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </div>
  )
}