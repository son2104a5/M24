import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt, { hash } from "bcryptjs-react"

export default function Login() {
    /*
        nhập email và pass
        vào db xem email người dùng nhập có trong db.json hay không
        nếu có thì lấy thông tin của user
        {
            id:
            username:
            email:
            password:
        }
            bcrypt.compare()
    */
    const navigate = useNavigate()
    const [check, setCheck] = useState<string>('none')
    const [checkEmailInput, setCheckEmailInput] = useState<string>('none')
    const [checkPasswordInput, setCheckPasswordInput] = useState<string>('none')
    const [email, setEmail] = useState<string>('')
    const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState<string>('')
    const paswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const submitUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (email === ''){
            setCheckEmailInput('')
        }
        if (password === ''){
            setCheckPasswordInput('')
        }
        if(email !== '' && password !== ''){
            setCheckEmailInput('none')
            setCheckPasswordInput('none')
            let checkEmailResponse = await axios.get(`http://localhost:8080/users?email_like=${email}`);
            if(checkEmailResponse.data.length === 0){
                setCheck('block')
            }else {
                let checkPasswordResponse = await axios.get(`http://localhost:8080/users?password_like=${password}`);
                if(checkPasswordResponse.data.length === 0){
                    setCheck('block')
                }else {
                    
                }
            }
        }
    }
  return (
    <div className="bg-slate-100 p-[20px] text-center rounded-3xl bg-transparent text-white backdrop-blur-[30px]">
        <form className="">
        <strong className="text-3xl">Đăng nhập</strong>
            <div className="mb-[20px] w-[400px] flex justify-between mt-6">
                <label className="">Email:</label>
                <input className="border-slate-200 border-2 rounded p-1 w-[270px]" type="email" value={email} onChange={emailInput}/>
            </div>
            <div
                className="flex mb-5 text-red-500 ml-4"
                role="alert"
                style={{ display: `${checkEmailInput}` }}
            >
                * Email không được để trống
            </div>
            <div className="w-[400px] flex justify-between mb-[20px]">
                <label className="">Mật khẩu:</label>
                <input className="border-slate-200 border-2 rounded p-1 w-[270px]" type="password" value={password} onChange={paswordInput}/>
            </div>
            <div
                className="flex mb-5 text-red-500 ml-4"
                role="alert"
                style={{ display: `${checkPasswordInput}` }}
            >
                * Mật khẩu không được để trống
            </div>
            <div
                className="flex mb-5 text-red-500 ml-4"
                role="alert"
                style={{ display: `${check}` }}
            >
                * Email hoặc mật khẩu không tồn tại!
            </div>
            <div>
                <Link to={'/'}><button type="submit" className="bg-blue-600 text-white p-2 pl-8 pr-8 mb-3 rounded hover:opacity-80" onClick={submitUser}>Đăng nhập</button></Link>
            </div>
            <p className="">Bạn chưa có tài khoản? <Link to={'/register'} className="hover:text-blue-600 ">Đăng ký ngay!</Link></p>
        </form>
    </div>
  )
}
