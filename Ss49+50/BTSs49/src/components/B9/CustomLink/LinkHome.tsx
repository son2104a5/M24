import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Link() {
  return (
    <div>
        <NavLink to={'/home-page'}>Về trang chủ</NavLink>
    </div>
  )
}
