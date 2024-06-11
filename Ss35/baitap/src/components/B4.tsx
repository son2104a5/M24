import { useState } from 'react'

export default function B4() {
    const [check, setCheck] = useState<boolean>(true)
    const handleClick = () => {
        setCheck(!check)
    }
  return (
    <div>
        {check ? <button onClick={handleClick}>Hiện</button>:<button onClick={handleClick}>Ẩn</button>}
        {check ? <p>Tiêu đề văn bản</p>:''}
    </div>
  )
}
