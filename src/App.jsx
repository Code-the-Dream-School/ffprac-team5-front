import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import NewRecipe from "./pages/NewRecipe";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginForm" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/NewRecipe" element={<NewRecipe />} />
        <Route path="/Ingredients" element={<Ingredients />} />
        <Route path="/Recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
