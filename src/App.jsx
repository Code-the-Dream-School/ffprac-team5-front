import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './Components/Nav';
import Profile from "./Components/Profile";
import Ingredients from "./Components/Ingredients";
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
        <Route path="/Ingredients" element={<Ingredients /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
