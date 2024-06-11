import React, {useState} from 'react'

export default function B1() {
    const [fullName, setFullName] = useState<string>("Nguyễn Đắc Sơn")
  return (
    <div>
        <h1>Họ và tên: {fullName}</h1>
    </div>
  )
}
