import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/LoginForm" element={<LoginForm /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
