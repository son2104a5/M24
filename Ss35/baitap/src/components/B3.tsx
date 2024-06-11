import { useState } from "react"

export default function B3() {
  const [check, setCheck] = useState<boolean>(false)
  const handleClick = () => {
    setCheck(!check)
  }
  return (
    <div>
        <p style={check ? {color: 'red'} : undefined}>Tiêu đề văn bản</p>
        <button onClick={handleClick}>Thay đổi màu</button>
    </div>
  )
}
