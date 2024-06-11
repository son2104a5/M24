import React, { useState } from 'react'

export default function Textarea() {
    const [text, setText] = useState<string>("")
    const hanđleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    console.log(text);
    
  return (
    <div>
        <textarea name="" onChange={hanđleChange} id=""></textarea>
    </div>
  )
}
