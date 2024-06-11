import { useState } from 'react'

export default function B6() {
    const [check, setCheck] = useState<boolean>(true)
    const handleChange = ()=>{
        setCheck(!check)
    }
  return (
    <div>
        { check ? <button onClick={handleChange}>Hiện</button>: <button onClick={handleChange}>Ẩn</button>}
    </div>
  )
}
