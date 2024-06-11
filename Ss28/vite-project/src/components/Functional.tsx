import React from 'react'

interface Props{
    name: string,
    students: string[]
}
export default function Functional(props:Props) {
    console.log(props);
    const { name } = props
    const { students } = props
  return (
    <div>Functional
        <h1>xin chào {name}</h1>
        {/* hiển thị danh sách sinh viên */}
        <ul>
            {students.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}
const obj={
    name:'hoa',
    address: 'HN',
    age: 25
}
