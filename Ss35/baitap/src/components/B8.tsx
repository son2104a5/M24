import React, { useState } from 'react'

export default function B8() {
    const [city, setCity] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value)
    }
  return (
    <div>
        <p>Thành phố: {city}</p>
        <select onChange={handleChange}>
            <option value=""> -- Chọn thành phố -- </option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Bắc Ninh">Bắc Ninh</option>
        </select>
    </div>
  )
}
