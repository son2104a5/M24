import axios from "axios"
import { useState } from "react"

type Student = {
  id: number,
  student_name: string,
  email: string
  address: string,
  phone: string,
  status: boolean,
  created_at: string
}

let date = new Date()
let day = date.getDate()
let year = new Date(day).getFullYear()
let month = date.getMonth() + 1

export default function GetAllStudent() {
  const [students, setStudents] = useState<Student[]>([])
  // // Bài 2:
  // const getAllStudent = () => {
  //   axios.get("http://localhost:8080/students")
  //   .then(res => console.log(res))
  //   .then(data => setStudents(data))
  //   .catch(err => console.log("Không tìm thấy bản ghi", err))
  // }
  // getAllStudent()
  
  // // Bài 3:
  // const getStudentById = () => {
  //   axios.get("http://localhost:8080/students/2")
  //   .then(res => console.log(res))
  //   .catch(err => console.log("Không tìm thấy bản ghi", err))
  // }
  // getStudentById()

  // // Bài 4:
  // const removeById = () => {
  //   axios.delete("http://localhost:8080/students/2")
  //  .then(res => console.log("Đã xóa bản ghi!" ,res))
  //  .catch(err => console.log("Không tìm thấy bản ghi", err))
  // }
  // removeById()

  // Bài 5: 
  const createStudent = () => {
    let newStudent = {
      id: 8,
      student_name: "S8",
      email: "s8@gmail.com",
      phone: "098854321",
      status: false,
      create_at: `${day}/${month}/${year}`
    }
    axios.post("http://localhost:8080/students", newStudent)
    axios.get("http://localhost:8080/students")
    .then(res => console.log(res))
  }
  createStudent()

  // // Bài 6:
  // const updateStudentById = () => {
  //   let updateStudent = {
  //     student_name: "S9",
  //     email: "s9@gmail.com",
  //     phone: "099854321",
  //     status: false,
  //     create_at: `${day}/${month}/${year}`
  //   }
  //   axios.put("http://localhost:8080/students/5", updateStudent)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }
  // updateStudentById()

  // Bài 7:
  const loadData = () => {
    axios.get("http://localhost:8080/students")
   .then(res => setStudents(res.data))
   .catch(err => console.log("Không tìm thấy bản ghi", err))
  }
  loadData()
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        borderTop: '1px solid #ccc',
        backgroundColor: '#435d7d'
      }}>
        <strong style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '24px'
        }}>Quản lí sinh viên</strong>
        <button style={{
          padding: '5px',
          backgroundColor: 'green',
          borderRadius: '5px',
          color: '#fff',
          border: '1px solid transparent',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginLeft: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}><span style={{
          backgroundColor: '#fff',
          color: 'green',
          width: '20px',
          height: '20px',
          marginRight: '10px',
          borderRadius: '50%',
          lineHeight: '20px',
        }}>+</span> Thêm mới sinh viên</button>
      </div>
      <table style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th><input type="checkbox" style={{ width:'20px', height: '40px'}} /></th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student)=> {
            return  <tr>
                      <td><input type="checkbox" style={{ width:'20px', height: '40px'}} /></td>
                      <td>{student.student_name}</td>
                      <td>{student.email}</td>
                      <td>{student.address}</td>
                      <td>{student.phone}</td>
                      <td><span style={{
                        cursor: 'pointer',
                        color: 'yellow'
                      }} className="material-symbols-outlined">edit</span> <span style={{
                        color:'red',
                        cursor: 'pointer',
                        marginLeft: '10px'
                      }} className="material-symbols-outlined">delete</span></td>
                    </tr>
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
