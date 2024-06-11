import React, { useState } from 'react'

export default function B1() {
    const [fullName,setFullName] = useState<string>("Nguyễn Đắc Sơn")
  return (
    <div>
        <b>Họ và tên: {fullName}</b>
    </div>
  )
}
