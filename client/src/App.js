import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Features/navBar/Navbar';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className='max-w-[1600px] mx-auto'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='page1' element={<Home />} />
        <Route path='page2' element={<Home />} />
        <Route path='page3' element={<Home />} />
      </Routes>
      <p className='text-3xl font-bold  text-red-200'>Hello world!</p>
    </div>
  );
}

export default App;
