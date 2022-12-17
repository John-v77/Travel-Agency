import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Packages from "./pages/Packages/Packages.page";
import Cart from "./pages/shoppingCart/Cart.page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="packages" element={<Packages />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <h1 className="text-xl font-bold text-red-400 underline">Home Page</h1>
    </div>
  );
}

export default App;
