import React, { useState } from 'react'

export default function SelectOption() {
    const [select, setSelect] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }
    
    console.log(select);
    
  return (
    <div>
        <select onChange={handleChange}>
            <option selected value="nam">Nam</option>
            <option value="nữ">Nữ</option>
            <option value="khác">Khác</option>
        </select>
    </div>
  )
}
