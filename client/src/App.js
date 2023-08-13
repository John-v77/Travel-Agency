import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Features/navBar/Navbar";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Features/footer/Footer";
import Destinations from "./components/Pages/Destinations/Destinations";
import Login from "./components/Pages/login/Login";
import Register from "./components/Pages/login/Register";
import Sandbox from "./pages/Sandbox";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto ">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="test" element={<Sandbox />} />
        <Route path="page3" element={<Home />} />
        <Route path="account" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
