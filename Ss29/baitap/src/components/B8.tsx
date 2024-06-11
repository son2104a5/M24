import { useState } from 'react'

export default function B8() {
    const [count, setCount] = useState<number>(0)
    const Click = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <button onClick={Click}>Click {count} lần</button>
    </div>
  )
}
