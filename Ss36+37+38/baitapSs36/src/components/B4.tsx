import { useEffect, useRef } from 'react'

export default function B4() {
    const focus = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        focus.current?.focus()
    })
  return (
    <div>
        <br />
        <input ref={focus} type="text" placeholder='Focus me...' />
    </div>
  )
}
