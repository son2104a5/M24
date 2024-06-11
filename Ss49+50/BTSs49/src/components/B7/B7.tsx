import { NavLink, Outlet } from "react-router-dom";
import './B7.css'

export default function B7() {
  return (
    <div>
        <strong className='text-3xl'>B7:</strong>
        <div className='text-center'>
          <nav className='flex gap-11 justify-center'>
            <NavLink to={'/B7/home'}>Home</NavLink>
            <NavLink to={'/B7/product'}>Product</NavLink>
            <NavLink to={'/B7/detail'}>Detail</NavLink>
          </nav>
          <Outlet></Outlet>
        </div>
    </div>
  )
}
