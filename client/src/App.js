import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Features/navBar/Navbar";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Features/footer/Footer";
import Destinations from "./components/Pages/Destinations/Destinations";
import Login from "./components/Pages/login/Login";
import Register from "./components/Pages/login/Register";
import Sandbox from "./components/Pages/TestPage/Sandbox";
import { useSelector } from "react-redux";
import Acount from "./components/Pages/login/Acount";
import SearchPage from "./components/Features/SearchBox/SearchPage";

function App() {
  const { userToken } = useSelector((state) => state.user);
  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="test" element={<Sandbox />} />
        <Route path="searched/:keyword" element={<SearchPage />} />
        <Route
          path="account"
          element={userToken ? <Acount /> : <Login />}
        />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
