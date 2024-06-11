import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './B8.css'

export default function B8() {
  return (
    <div>
        <strong className='text-3xl'>B8:</strong>
        <div className='text-center'>
          <nav className='flex gap-11 justify-center'>
            <NavLink to={'/B8/admin'}>Admin</NavLink>
            <NavLink to={'/B8/account'}>Account</NavLink>
            <NavLink to={'/B8/product'}>Product</NavLink>
          </nav>
          <Outlet></Outlet>
        </div>
    </div>
  )
}
