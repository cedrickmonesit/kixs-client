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

function App() {
  return (
    <div className="app">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route
          path="profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route
          path="favorites"
          element={<ProtectedRoute component={Favorites} />}
        />
        {/* ProtectedRoute takes the component that will be rendered once authentication is done also secures the route until authenticaiton */}

        {/* role based routes */}
        <Route path="admin" element={<RoleBasedRoute component={Admin} />} />

        {/* 404 page */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
