import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <nav className='flex gap-2'>
            {/* <Link to="/about">About</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link> */}
            <NavLink to="/about">About</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {/* Sinh ra thêm navLink */}
        </nav>
        <Outlet></Outlet>
    </div>
  )
}
