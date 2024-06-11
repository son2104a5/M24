import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter() {
    const isLogin = true
  return (
    <div>
        {
            isLogin ? <Outlet></Outlet> : <Navigate to={'/login'}></Navigate>
        }
    </div>
  )
}
