import { useEffect, useState } from "react"
import bcrypt from "bcryptjs-react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
    id: number
    name: string
    email: string
    password: string
    cart: any[]
}

export default function Register() {
    // tạo form cho người dùng nhập
    // lấy thông tin người dùng nhập
    // khi thông tin gửi lên db.json phải kiểm tra xem email có tồn tại không
    // nếu có thì báo email đã được đăng kí
    // dùng try vấn
    // axios.get(`http://localhost:8080/users?email_like=${email}`)
    // ==> 2 kết quả trả về
    // 1. []: email chưa tồn tại trong bảng user
    //  + Mã hóa mật khẩu rồi lưu (dùng bcrypt để mã hóa)
    //  + Lưu lên db.json
    // 2. [{}]: email đã tồn tại trong bảng users
    useEffect(()=>{
        // let pass: string = '1234567';
        // bcrypt.hash(pass, 10, function(err, hash) {
        //     console.log(hash);
        //     // let passB: string = "$2a$10$a4yoPFFpKJ85kjHU7xIsTeCdIziVCMLNE3Ug2CPKRpK7a.mMtD0Bm"
        //     bcrypt.compare(pass, hash, function(err, res) {
        //         console.log(res);
        //     });
        // });
    }, [])
    const [username, setUsername] = useState<string>('')
    const takeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const [password, setPassword] = useState<string>('')
    const takePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const [email, setEmail] = useState<string>('')
    const takeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const navigate = useNavigate();
    const [checkName, setCheckName] = useState<string>('none')
    const [checkEmail, setCheckEmail] = useState<string>('none')
    const [checkEmailHasRegistered, setCheckEmailHasRegistered] = useState<string>('none')
    const [checkPassword, setCheckPassword] = useState<string>('none')
    const saveUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if (username === '') {
            setCheckName('');
        }else {
            setCheckName('none');
        }
        if (email === '') {
            setCheckEmail('');
        }else {
            setCheckEmail('none');
        }
        if (password === '') {
            setCheckPassword('');
        }else {
            setCheckPassword('none');
        }

        if (username !== '' && email !== '' && password !== '') {
            let checkEmailResponse = await axios.get(`http://localhost:8080/users?email_like=${email}`);
            if (checkEmailResponse.data.length === 0) {
                let user: User = {
                    id: Math.floor(Math.random() * 1000000000),
                    name: username,
                    email: email,
                    password: bcrypt.hashSync(password, 10),
                    cart: [],
                };

                try {
                    await axios.post('http://localhost:8080/users', user);
                    setCheckName('none');
                    setCheckEmail('none');
                    setCheckPassword('none');
                    setCheckEmailHasRegistered('none');
                    navigate('/login');
                } catch (error) {
                    console.error(error);
                }
            } else {
                setCheckEmailHasRegistered('');
            }
        }
    };
  return (
    <div className="bg-slate-100 p-[20px] text-center rounded-3xl bg-transparent text-white backdrop-blur-[30px]">
        <form className="">
        <strong className="text-3xl">Đăng ký tài khoản</strong>
            <div className="mt-[30px] mb-[20px] w-[400px] flex justify-between">
                <label className="">Tên của bạn:</label> 
                <input className="border-slate-200 border-2 rounded p-1 w-[270px]" type="email" onChange={takeName}/>
            </div>
            <div
                className="flex mb-5 text-red-500 ml-4"
                role="alert"
                style={{ display: `${checkName}` }}
            >
                * Tên không được để trống.
            </div>
            <div className="mb-[20px] w-[400px] flex justify-between">
                <label className="">Email:</label>
                <input className="border-slate-200 border-2 rounded p-1 w-[270px]" type="email" onChange={takeEmail}/>
            </div>
            <div
                className="flex mb-5 text-red-500 ml-4"
                role="alert"
                style={{ display: `${checkEmail}` }}
            >
                * Email không được để trống.
            </div>
            <div
                className="flex mb-5 text-red-500 ml-4"
                role="alert"
                style={{ display: `${checkEmailHasRegistered}` }}
            >
                * Email đã tồn tại.
            </div>
            <div className="w-[400px] flex justify-between mb-[20px]">
                <label className="">Mật khẩu:</label>
                <input className="border-slate-200 border-2 rounded p-1 w-[270px]" type="password" onChange={takePass}/>
            </div>
            <div
                className="flex mb-5 text-red-500 ml-4"
                role="alert"
                style={{ display: `${checkPassword}` }}
            >
                * Mật khẩu không được để trống!
            </div>
            <div>
                <button type="submit" className="bg-blue-600 text-white p-2 pl-10 pr-10 mb-3 rounded hover:opacity-80" onClick={saveUser}>Đăng ký</button>
            </div>
            <p className="">Bạn đã có tài khoản? <Link to={'/login'} className="hover:text-blue-600">Đăng nhập</Link></p>
        </form>
    </div>
  )
}
