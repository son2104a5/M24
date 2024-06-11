import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count, setCount] = useState<number>(0)
    const useRef1 = useRef(0)
    const focusInput = useRef<HTMLInputElement>(null)
    let index = 0
    const handleClick = () => {
        setCount(count + 1)
        index++
        useRef1.current = useRef1.current + 1
    }
    console.log(index);
    useEffect(()=>{
        focusInput.current?.focus()
    })
  return (
    <div>
        {/* 
            Nó là hook react cung cấp
            Cách dùng: import vào dùng
            kết quả trả về của useRef là 1 đối tượng và trong đối tượng đó có 1 thuộc tính mặc định
            là: current

            Nó có 2 cách dùng chính
            1. khi mỗi lần component re-render thì nó không tạo ra 1 referentype mà vẫn giữ nguyên giá trị referentype ban đầu
            2. giúp mặc định focus vào ô input mà mình muốn
        */}
        <br />
        <label htmlFor="">Nhập email</label>
        <input ref={focusInput} type="text" />
        <br />
        <label htmlFor="">Nhập password</label>
        <input type="text" />
        <br />
        <button>Login</button>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
