import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AuthContext from "./contexts/AuthContext"
import Login from "./views/Login/Login"
import Profile from "./views/Profile/Profile"

function App() {
  const { isAuthLoaded } = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar />

      <div className="container my-3">
        {!isAuthLoaded
          ? <p>Loading...</p>
          : (
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
          )
        }
      </div>
    </div>
  )
}

export default App
