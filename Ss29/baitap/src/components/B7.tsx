import { useState } from 'react'

export default function B7() {
    const [arr, setArr] = useState<string[]>([])
    const handleClick = () => {
        setArr([...arr, Math.floor(Math.random() * 10) + ','])
    }
  return (
    <div>
        <b>Mảng số : [{arr}]</b>
        <br />
        <button onClick={handleClick}>Add Element</button>
    </div>
  )
}
