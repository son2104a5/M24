import { useState } from 'react'
import './style.css'
import List from './List';
import AddStd from './AddStd';

interface Student {
  count: number;
  id: string;
  name: string;
  status: boolean
  dOB: string
  email: string
}

let check: boolean = false;
export default function Qlsv() {
  const [std, setStd] = useState<Student>({
    count: 0,
    id: '',
    name: '',
    status: true,
    dOB: '',
    email: ''
  })
  const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    let value = e.target.value
    setStd({...std, name: value})
    console.log(std);
    
  }
  const handleSubmit: any = () => {
    setStudents([...students, std])
    localSubmit()
    cancelForm()
  }
  const localSubmit: any = () => {
    localStorage.setItem('students', JSON.stringify(students))
  }
  const [students, setStudents] = useState<Student[]>(()=>{
    const listLocal = localStorage.getItem('students')
    const list = listLocal ? JSON.parse(listLocal) : []
    return list
  })
  const [stateFake, setStateFake] = useState<number>(0)
  const handleClick = () => {
    check = true;
    setStateFake(Math.random())
  }
  const cancelForm: any = () => {
    check = false;
    setStateFake(Math.random())
  }
  return (
    <>
      {check ? <AddStd cancel={cancelForm} change={handleChange} submit={handleSubmit}></AddStd> : ''}
      <div className='main'>
        <div className='head1'>
          <strong>Quản lí sinh viên</strong>
          <button style={{
            padding: '10px',
            backgroundColor: 'blue',
            borderRadius: '5px',
            color: '#fff',
            border: '1px solid transparent',
            cursor: 'pointer'
          }} onClick={handleClick}>Thêm mới sinh viên</button>
        </div>
        <div className='head2'>
          <select name="" id="" style={{
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}>
            <option value="">Sắp xếp theo tuổi</option>
          </select>
          <input type="text" placeholder='Tìm kiếm từ khóa theo....' style={{
            padding: '5px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}/>
        </div>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
          {students.map((student) => {
            return <List key={student.id} student={student} />;
          })}
          </tbody>
        </table>
      </div>
    </>
  )
}
