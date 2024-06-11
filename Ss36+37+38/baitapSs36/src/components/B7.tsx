import { useState } from 'react'

export default function B7() {
    const [count, setCount] = useState(0);
    const [prevCountRef, setPrevCountRef] = useState(0);
  
    const increaseCount = () => {
      setPrevCountRef(count);
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Giá trị trước: {prevCountRef}</p>
        <p>Giá trị hiện tại: {count}</p>
        <button onClick={increaseCount}>Tăng</button>
      </div>
  )
}
