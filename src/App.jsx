import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthContext from "./contexts/AuthContext";
import Login from "./views/Login/Login";
import CreateProduct from "./views/Products/ProductCreate/ProductCreate";
import ProductDetail from "./views/Products/ProductDetail/ProductDetail";
import ProductList from "./views/Products/ProductList/ProductList";
import Profile from "./views/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-product"
            element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            }
          />
          <Route path="product-list" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
