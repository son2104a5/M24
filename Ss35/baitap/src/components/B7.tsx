import { useState } from "react"

export default function B7() {
    const [text, setText] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
        <textarea onChange={handleChange} name="" id=""></textarea>
        <p>Số ký tự: {text.length}</p>
    </div>
  )
}
