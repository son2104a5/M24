import React, { useState } from 'react'

export default function B5() {
    const [text, setText] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
        <input onChange={handleChange} type="text" />
        <p>{text}</p>
    </div>
  )
}
