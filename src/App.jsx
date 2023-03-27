import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Login from "./views/Login"

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
