import React, { useState } from 'react'

export default function B10() {
    const [hobby, setHobby] = useState<string[]>([])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (hobby.length === 0) setHobby([...hobby, e.target.value])
        else setHobby([...hobby,', ' + e.target.value  ])
        if (!e.target.checked) {
            let index = hobby.indexOf(e.target.value)
            hobby.splice(index, 1)
            setHobby([...hobby])
        }
    }
  return (
    <div>
        <p>Sở thích: [{hobby}]</p>
        <input type="checkbox" id="" onChange={handleChange} value={'"Đi chơi"'}/> <label htmlFor="">Đi chơi</label>
        <input type="checkbox" id="" onChange={handleChange} value={'"Code"'}/> <label htmlFor="">Code</label>
        <input type="checkbox" id="" onChange={handleChange} value={'"Bơi lội"'}/> <label htmlFor="">Bơi lội</label>
        <input type="checkbox" id="" onChange={handleChange} value={'"Nhảy dây"'}/> <label htmlFor="">Nhảy dây</label>
    </div>
  )
}
