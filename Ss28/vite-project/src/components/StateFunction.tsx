import React, { useState } from 'react'

export default function StateFunction() {
    const [number, setNumber] = useState<number>(1); [1,]
    // khi dùng useState bắt buộc phải khai báo kiểu dữ liệu cho nó
    const [fullName, setFullName] = useState<string>("MT")
    // hàm useState trả về 1 cái mảng bên trong mảng có 2 giá trị:
    // 1 là giá tri 1, 2 là 1 cái hàm xử lý
    const handleClick = () =>{
        setNumber(number + 1)
    }
  return (
    <div>StateFunction
        {/* 
        React ra đời năm 2013
        trước đó trong function không quản lí state được mà chỉ quản lí state được ở bên trong class

        tháng 10/2018: Hook ra đời bổ sung cho function có thể quản lí state được useState
        */}
        <p>Giá trị mở đầu {number}</p>
        <button onClick={()=>handleClick()}>Tăng</button>
        <p>xin chào {fullName}</p>
    </div>
  )
}
