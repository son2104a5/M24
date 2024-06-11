import { useLocation, useParams } from 'react-router-dom'

interface User {
    id: number
    name: string
    address: string
    email: string
}

interface Props {
    listUsers: User[]
}

export default function UserDetail({listUsers}: Props) { 
    const location = useLocation()
    const {userId} = useParams()
  return (
    <div>
        <strong className='text-2xl'>Thông tin chi tiết</strong>
        {listUsers.map((user) =>{
            if(user.id === Number(userId)){
                return  <ul>
                            <li>id: {user.id}</li>
                            <li>Tên: {user.name}</li>
                            <li>Email: {user.email}</li>
                            <li>Địa chỉ: {user.address}</li>
                        </ul>
            }
        })}
        
    </div>
  )
}
