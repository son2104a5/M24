import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    let [user, setUser] = useState({ email: '', password: ''})
    let navigate = useNavigate()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setUser({...user, [name]: value})
    }
    const register = () => {
        // lấy giá trị người dùng nhập vào
        // xử lý hết những tác vụ
        // check ok hết (validate)
        // muốn chuyển sang trang login
        navigate("/login"), {state: user}
    }
  return (
    <div>Register
        <br />
        <label htmlFor="">Email</label>
        <input name='email' onChange={handleChange} type="text"/>
        <label htmlFor="">Password</label>
        <input name='password' type="text" onChange={handleChange}/>
        <button onClick={register}>Register</button>
    </div>
  )
}
