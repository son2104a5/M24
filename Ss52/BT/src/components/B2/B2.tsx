import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "../B1/home/Home";
import About from "../B1/about/About";
import Contact from "../B1/contact/Contact";

export default function B2() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Route>
        </Routes>
        <Outlet></Outlet>
    </div>
  )
}
