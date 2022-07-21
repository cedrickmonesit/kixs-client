import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Members from "./Components/Members";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Unauthorized from "./Components/Unauthorized";
import Missing from "./Components/Missing";
import ProtectedRoute from './Components/protected-route';

function App() {
  return (
    <div className='app'>
   <Routes>
    {/* public routes */}
    <Route path="/" element={<Home />} />
    <Route path="register" element={<Register />} />
    <Route path="unauthorized" element={<Unauthorized />} />

    {/* protected routes */}
    <Route path="members" element={<Members />} />
    <Route path="profile" element={<ProtectedRoute component={Profile} />} /> {/* ProtectedRoute takes the component that will be rendered once authentication is done also secures the route until authenticaiton */}

    {/* 404 page */}
    <Route path="*" element={<Missing />} />
   </Routes>
   </div>
  );
}

export default App;
