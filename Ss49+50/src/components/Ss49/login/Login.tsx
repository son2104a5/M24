import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Login() {
    // Dùng hook useLcation của react-router-dom cung cấp
    const location = useLocation()
    console.log(location);
    
  return (
    <div>Login <br />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
        <button >Login</button>
    </div>
  )
}
