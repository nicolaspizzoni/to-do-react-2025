import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "./pages/main-layout"
import PageComponents from "./pages/page-component"
import PageHome from "./pages/page-home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<PageHome />} />
          <Route path="components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
