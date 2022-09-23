import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Unauthorized from "./components/Unauthorized";
import Favorites from "./components/favorites/Favorites";
import Missing from "./components/Missing";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import Product from "./components/product/Product";
import NavBar from "./components/navigation/Nav";
import Footer from "./components/Footer";
import "animate.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/product/:id" element={<Product />} />

        {/* protected routes */}
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route
          path="/favorites"
          element={<ProtectedRoute component={Favorites} />}
        />
        {/* ProtectedRoute takes the component that will be rendered once authentication is done also secures the route until authenticaiton */}

        {/* role based routes */}
        <Route path="/admin" element={<RoleBasedRoute component={Admin} />} />

        {/* 404 page */}
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
