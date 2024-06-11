import React, {useState} from 'react'

interface User {
    userName: string;
    email: string;
}

export default function Function() {
    const [user, setUserName] = useState<User>({
        userName:'',
        email:''
    })
    // hàm xử lí khi click vào button
    const handleClick = () => {
        console.log("click")
    }
    // gọi hàm theo kiểu truyền tham số
    const handleDelete = (userID:any) => {
        console.log(userID);
    }
    // khai báo hàm đăng kí
    const register = () => {
        console.log("đã ấn vào hàm đk!", user);
    }
    // khai báo hàm handleChange
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        setUserName({
            ...user, [name]:value
        })
    }
    // const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     // console.log(e.target.value);
    //     setUserName(e.target.value)
    // }
    // const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value)
    // }
  return (
    <div>
        Function
        <p><button onClick={()=>handleDelete(5)}>Hoa</button></p>
        <p><button onClick={handleClick}>Click</button></p>
        Username: <input onChange={handleChange} type="text" name='userName'/>
        <br />
        Email: <input onChange={handleChange} type="text" name='email' />
        <br />
        <button onClick={register}>register</button>
    </div>
  )
}
