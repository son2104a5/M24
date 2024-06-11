import { useEffect, useState } from "react"

export default function UseEffect() {
  const [count, setCount] = useState<number>(0)
  const [active, setActive] = useState<boolean>(true)
    useEffect(()=>{
        // console.log('Đang gọi vèo useEffect');
        
    }, [count])
    const handleClick = () => {
      setCount(count + 1)
    }
    // console.log("đã re-render lại");
    
  return (
    <div>
        {/* tất cả các hook bản chất là những function
            khi dùng phải import để dùng
            useEffect nhận vào 2 đối số:
            1. là 1 callback (arrow function)
            2. [] || [deps]
            ==> useEffect sẽ có 3 cách dùng:
            C1: chỉ chứa callback là 1 arrow function
                khi component được mount vào dom thì useEffect được gọi
                mỗi lần component re-render thì nó cx được gọi
            C2. chứa callback và []
                cũng được gọi sau khi component được mount vào dom
                khi mỗi lần conponent re-render thì useEffect sẽ không bị gọi lại 
                C3. chứa callback và [dependency]
                cũng được gọi sau khi component được mount vào dom
                khi dependency thay đổi thì useEffect được gọi
            
            useEffect là phương thức thường dùng để xử lí các tác vụ như callAPI để lấy dữ liệu
            - thường dùng để xử lí các side Effect (bên cạnh ảnh hưởng phụ thuộc)
            - componentDidMount được gọi sau khi được render lần đầu
        */}
        <p>Giá trị count: {count}</p>
        <button onClick={handleClick}>Tăng</button>
    </div>
  )
}
