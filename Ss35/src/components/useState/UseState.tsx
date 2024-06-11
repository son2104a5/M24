import React, { useState } from 'react'

export default function UseState() {
    let cart = [
        {
            name: 'ip',
            price: 5000,
            quantity: 5
        },
        {
            name: 'ip',
            price: 6000,
            quantity: 5
        },
        {
            name: 'ip',
            price: 7000,
            quantity: 5
        },
    ]
    let payment = cart.reduce((currentValue, item) => {
        return currentValue + item.price * item.quantity
    }, 0)
    const [name, setName] = useState<string>('MT')
    const [count, setCount] = useState<number>(0)
    const [price, setPrice] = React.useState<number>(payment)
    const handleClick = () => {
        setCount(count + 1)
        setCount((pre) => pre + 1)
        setCount(25)
    }
    // sử dụng batch update
  return (
    <div>
        {/* 
            useState = use + state (sử dụng trạng thái)
            + trạng thái của dữ liệu tức là khi thay đổi thì giao diện nó thay đổi theo
            + các hook là các phương thức được React cung cấp cho nên khi sử dụng phải import vào để dùng
            + bản chất useState là một function trả về 1 cái [] có 2 phần tử
            "MT", 0 được gọi là giá trị khởi tạo (initial-value)
            - khi có nhiều useState giống nhau cùng chạy 1 lúc thì sẽ đưa hết các useState vào 1 cái 
            queue (hàng đợi) để xử lí
            - đối với kĩ thuật batch update thì nó lấy giá trị trả về của useState trước làm giá trị tham số
            đầu vào tham số đầu vào của useState sau
            - initial của useState
            + truyền trực tiếp giá trị
            + dùng arrow function để trả về kết quả
        */}
        <p>Giá trị khởi tạo của biến count: {count}</p>
        <button onClick={handleClick}>Tăng</button>
        <p>Giá phải trả: {price}</p>
    </div>
  )
}
