import React, { useEffect, useState } from "react"

type User = {
    id: number
    name: string
    age: number
    city: string
}

export default function GetMethod() {
    const [users, setUsers] = useState<User[]>([])
    const [typeSubmit, setTypeSubmit] = useState<string>("add")
    const [userInfo, setUserInfo] = useState<User|null>(null)
    const [user, setUser] = useState<User>({
        id: 0,
        name: '',
        age: 0,
        city: ''
    })
    const loadData = () => {
        // Khi sử dụng fetch mà không định nghĩa HTTP request thì mặc định nó là GET
        fetch("http://localhost:3000/users")
            .then((res: Response) => res.json())  // Bước ép kiểu dữ liệu
            .then((data: User[])=>{
                setUsers(data)
            })
            .catch((err: Response) =>console.log(err))
    }
    useEffect(()=>{
        loadData()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    // Hàm lấy ttin chi tiết 1 bản ghi theo id
    const handleGetInfor = (id: number) => {
        // Cập nhật lại typeSubmit
        setTypeSubmit("update")
        // Gọi API lấy ttin chi tiết
        fetch(`http://localhost:3000/users/${id}`)
           .then((res: Response) => res.json())
           .then((data: User) => {
                setUser(data)
            })
           .catch((err: Response) => console.log(err))
    }

    // Hàm submit
  return (
    <div>
        <table border={1} style={{ width: '' }}>
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>City</td>
                    <td>Option</td>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                        <td>
                            <button onClick={()=>handleGetInfor(user.id)}>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
