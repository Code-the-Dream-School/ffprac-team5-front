import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './Components/Nav';
import Profile from "./Components/Profile";
import Home from './pages/Home';
import Login from './pages/Login';
import NewRecipe from './pages/NewRecipe';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginForm" element={<Login /> } />
        <Route path="/Profile" element={<Profile /> } />
        <Route path="/NewRecipe" element={<NewRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
