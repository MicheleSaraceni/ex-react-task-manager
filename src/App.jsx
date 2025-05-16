import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import DefaultLayout from "./pages/components/layout/DefaultLayout"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={TaskList} />
          <Route path="/add" Component={AddTask} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
