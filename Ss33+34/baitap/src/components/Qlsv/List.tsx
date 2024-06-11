import React from 'react'

interface Student {
  count: number;
  id: string;
  name: string;
  dOB: string;
  email: string;
  status: boolean;
}

interface Type {
  student: Student
}
export default function List({student}: Type) {
  return (
    <>
        <tr>
            <td>{student.count}</td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.dOB}</td>
            <td>{student.email}</td>
            <td>{student.status ? <button style={{backgroundColor: "#f6ffed", color: 'lime', border: '1px solid lime', borderRadius: '3px'}}>Đang hoạt động</button> : <button style={{backgroundColor: "#fff1f0", color: 'red', border: '1px solid red', borderRadius: '3px'}}>Ngừng hoạt động</button>}</td>
            <td style={{display: 'flex', gap: '5px'}}>
                <button style={{border: '1px solid violet', backgroundColor: '#f9f0ff', color: 'violet', padding: '3px', borderRadius: '2px'}}>Chặn</button>
                <button style={{border: '1px solid orange', backgroundColor: '#fff7e6', color: 'orange', padding: '3px', borderRadius: '2px'}}>Sửa</button>
                <button style={{border: '1px solid red', backgroundColor: '#fff1f0', color: 'red', padding: '3px', borderRadius: '2px'}}>Xóa</button>
            </td>
        </tr>
    </>
  )
}
