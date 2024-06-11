import React, { useState } from 'react'

export default function B9() {
    const [gender, setGender] = useState<string>('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value)
    }
  return (
    <div>
        <p>Giới tính: {gender}</p>
        <input onChange={handleChange} type="radio" name='gender' value={'Nam'}/> <label htmlFor="">Nam</label>
        <input onChange={handleChange} type="radio" name='gender' value={'Nữ'}/> <label htmlFor="">Nữ</label>
        <input onChange={handleChange} type="radio" name='gender' value={'Khác'}/> <label htmlFor="">Khác</label>
    </div>
  )
}
