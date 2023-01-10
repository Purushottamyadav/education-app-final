import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Home from './components/HomePage/HomePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
