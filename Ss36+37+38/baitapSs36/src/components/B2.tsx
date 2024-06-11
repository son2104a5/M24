import { useState } from 'react'

export default function B2() {
    const [count, setCount] = useState<number>(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    document.title = `Click ${count} lần`
  return (
    <div>
        <button onClick={handleClick}>Click {count} lần</button>
    </div>
  )
}
