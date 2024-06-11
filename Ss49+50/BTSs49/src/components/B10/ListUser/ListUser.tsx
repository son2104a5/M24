import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface User {
    id: number
    name: string
    address: string
    email: string
}

interface Props {
    listUsers: User[]
}
export default function ListUser({listUsers}: Props) {
    const [user, setUser] = useState<User>()
    let navigate = useNavigate()
    
  return (
    <div className='flex gap-8'>
        {listUsers.map(user => {
            return  <ul>
                        <li>id: {user.id}</li>
                        <li>Tên: {user.name}</li>
                        <li>Email: {user.email}</li>
                        <li>Địa chỉ: {user.address}</li>
                        <li className='mt-4'><Link to={`/user-detail/${user.id}`} className='bg-gray-300 p-2'>Xem chi tiết</Link></li>
                    </ul>
        })}
    </div>
  )
}
