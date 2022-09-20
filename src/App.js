import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Unauthorized from "./Components/Unauthorized";
import Favorites from "./Components/favorites/Favorites";
import Missing from "./Components/Missing";
import ProtectedRoute from "./Components/protected-route";
import RoleBasedRoute from "./Components/role-based-route";

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
