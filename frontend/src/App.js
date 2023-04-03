import { Routes, Route } from "react-router-dom";
import Register from "./components/register_page/register";
import Login from "./components/login_page/login";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
