import React, { useState } from 'react'

export default function B9() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [submitted, setSubmitted] = useState<boolean>(false)
    const handleChangeInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleChangeInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
  return (
    <div style={{
        display: 'flex',
        gap: '50px'
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            textAlign: 'center'
        }}>
            <b>Form</b>
            <input type="text" placeholder='Nhập email' onChange={handleChangeInput1} value={email}/>
            <input type="password" placeholder='Nhập mật khẩu' onChange={handleChangeInput2} value={password}/>
        </div>
        <div>
            <p>Email: {submitted? email:''}</p>
            <p>Mật khẩu: {submitted? password:''}</p>
            <br />
            <button onClick={()=>{
                setSubmitted(true)
            }}>Submit</button>
        </div>
    </div>
  )
}
