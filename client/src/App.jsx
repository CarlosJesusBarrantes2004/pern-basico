import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskProvider from "./context/TaskProvider";
import TaskFormPage from "./pages/TaskFormPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<TasksPage></TasksPage>}></Route>
            <Route path="/new" element={<TaskFormPage></TaskFormPage>}></Route>
            <Route
              path="/edit/:id"
              element={<TaskFormPage></TaskFormPage>}
            ></Route>
          </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
