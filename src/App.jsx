import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./components/Nav"
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginForm" element={<Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
