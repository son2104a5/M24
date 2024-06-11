import axios from "axios";
import { useEffect } from "react";
export default function App() {
  // lấy tất cả bản ghi trong bảng users
  // useEffect(()=>{
  //   axios.get("http://localhost:8080/users")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }, [])

  // lấy 1 bản ghi trong bảng users
  // useEffect(()=>{
  //   axios.get("http://localhost:8080/users/1")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }, [])

  // Thêm 1 bản ghi cho bảng users
  // useEffect(()=>{
  //   let newUser = {
  //     name: "B",
  //     address: "HCM"
  //   }
  //   axios.post("http://localhost:8080/users", newUser)
  //  .then(res => console.log(res))
  //  .catch(err => console.log(err))
  // }, [])

  // xóa 1 bản ghi cho bảng users
  // useEffect(()=>{
  //   axios.delete("http://localhost:8080/users/2")
  //  .then(res => console.log(res))
  //  .catch(err => console.log(err))
  // }, [])

  // cập nhật 1 bản ghi cho bảng users
  // PUT, PATCH
  // Khi cập nhật cần phải biết id của của bản ghi cần cập nhật
  // useEffect(()=>{
  //   let updateUser = {
  //     name: "D",
  //     address: "HCM"
  //   }
  //   axios.put("http://localhost:8080/users/3", updateUser)
  //  .then(res => console.log(res))
  //  .catch(err => console.log(err))
  // }, [])

  // useEffect(()=>{
  //   tìm kiếm theo tên trong thuộc tính name
  //   axios.get("http://localhost:8080/users?name_like=a")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  //   tìm kiếm theo kí tự trong thuộc tính name
  //   axios.get("http://localhost:8080/users?name_like=a")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }, [])

  // lấy bảng user ra sắp xếp các đối tượng có thuộc tính name theo bảng chữ cái
  // tăng dần: asc (ascending)
  // useEffect(()=>{
  //   axios.get("http://localhost:8080/users?_sort=name&_order=asc")
  //  .then(res => console.log(res))
  //  .catch(err => console.log(err))
  // }, [])

  // lấy bảng user ra sắp xếp các đối tượng có thuộc tính name theo bảng chữ cái
  // giảm dần: desc (descending)
  // useEffect(()=>{
  //   axios.get("http://localhost:8080/users?_sort=name&_order=desc")
  //  .then(res => console.log(res))
  //  .catch(err => console.log(err))
  // }, [])

  // phân trang 
  useEffect(()=>{
    axios.get("http://localhost:8080/users?_page=1&_limit=2")
   .then(res => console.log(res))
   .catch(err => console.log(err))
  })

    return (
    <div>
      
    </div>
  )
}
