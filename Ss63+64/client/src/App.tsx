import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

export default function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[url('https://i.pinimg.com/originals/2c/84/5a/2c845a66b8ad2a8aafd288bdc16cd459.jpg')] bg-no-repeat bg-cover">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}
