import { Link, Outlet } from 'react-router-dom'

export default function B6() {
  return (
    <div>
        <strong className='text-3xl'>B6:</strong>
        <div className='text-center'>
          <nav className='flex gap-11 justify-center'>
            <Link to={'/B6/home'}>Home</Link>
            <Link to={'/B6/contact'}>Contact</Link>
          </nav>
          <Outlet></Outlet>
        </div>
    </div>
  )
}
