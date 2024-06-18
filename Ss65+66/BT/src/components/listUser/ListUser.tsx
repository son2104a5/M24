import { useSelector } from "react-redux"

interface User {
    id: number;
    name: string;
    gender: string;
    dateOfBirth: string;
    address: string;
}

interface State {
    users: User[];
}

export default function ListUser() {
    const users = useSelector((state: State) => state.users)
  return (
    <div>
        <table border={1} style={{ width: '40%' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Địa chỉ</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.gender}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>{user.address}</td>
                            <td style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <button>Sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
