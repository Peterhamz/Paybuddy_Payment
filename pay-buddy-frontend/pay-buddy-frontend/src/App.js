import {Toaster} from 'react-hot-toast';
import { Routes, Route, Link } from "react-router-dom";
import "./assets/css/color.css";
import "./assets/css/style.css";
import Login from "./components/auth/Login";
import PasswordReset from "./components/auth/authenticationManager/PasswordReset";
import Header from "./components/BackendPages/layout/Header";
import Dashboard from "./components/BackendPages/Dashboard";
import Register from "./components/auth/Register/Register";
import Home from "./components/Pages/Home"
import NavBar from './components/Pages/layout/header/Header';
import PasswordResetForm from "./components/auth/authenticationManager/PasswordResetForm";


function App() {
  return (
    <div className="App">
      <Header />
      <Toaster />
          <Routes>
              <Route path="/" element={<Home />} />  
              <Route path="/reset-password/:token" element={<PasswordResetForm />} />
              <Route path="/reset" element={<PasswordReset />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
          </Routes>

    </div>
  );
}
export default App;
