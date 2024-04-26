import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./shared-components/Nav";
import Profile from "./shared-components/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import NewRecipe from "./pages/NewRecipe";
import Recipe from "./pages/Recipe";
import Ingredients from "./pages/Ingredients";

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
