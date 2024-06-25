import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, removeUser, updateUser } from '../../store/reducers/userReducer'
import { addUser } from '../../store/reducers/userReducer'
import { User, RootState } from '../../interface';

let idSet: any;
export default function Admin() {
    const [inputValue, setInputValue] = useState('')
    // lấy dữ liệu về
    const getData: any = useSelector((state: RootState) => state)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUser())
    }, [getData])
    // hàm thêm mới user
    const handleAdd = () => {
        let newUser = {
            name: 'd'
        }
        dispatch(addUser(newUser))
    }
    // hàm đi xóa user
    const handleDelete = (id: any) => {
        dispatch(removeUser(id))
    }
    // hàm update dữ liệu
    const handleUpdate = (id: any) => {
        const find = getData.user.users.find((user: User) => user.id === id)
        idSet = find.id
        setInputValue(find.name)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const updateSubmit = (id: any) => {
        dispatch(updateUser({id, name: inputValue}))
        setInputValue('')
    }
  return (
    <div style={{
        display: 'flex',
        gap: '30px',
        width: '100%',
        height: '100vh',
        padding: '20px',
    }}>
        <div>
            {getData.user.users.map((user: User)=>{
               return <li key={user.id}>{user.name} <button onClick={()=>handleDelete(user.id)}>Xóa</button> <button onClick={()=>handleUpdate(user.id)}>Sửa</button></li>
            })}
            <button onClick={handleAdd}>Add</button>
        </div>
        <div>
            <h2>Update dữ liệu</h2>
            <div style={{
                display: 'flex',
                gap: '10px'
            }}>
                <label htmlFor="">Tên:</label>
                <input value={inputValue} onChange={handleChange} type="text" />
            </div>
            <button onClick={()=>updateSubmit(idSet)}>Update</button>
        </div>
    </div>
  )
}