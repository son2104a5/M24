import { useMemo, useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

let cart: Product[] = [
  {
    id:1,
    name: 'Coca cola',
    price: 1000,
    quantity: 10
  },
  {
    id:1,
    name: 'Coca cola',
    price: 1000,
    quantity: 10
  },
  {
    id:1,
    name: 'Coca cola',
    price: 1000,
    quantity: 10
  },
  {
    id:1,
    name: 'Coca cola',
    price: 1000,
    quantity: 10
  },
]
export default function UseMemo() {
  const [count, setCount] = useState<number>(0)
  const [myCart, setMyCart] = useState<Product[]>(cart)
  // đi tính toán giá phải trả
  let price = useMemo(()=>{
    let payment = cart.reduce((acc, currentValue) => {
      return acc + currentValue.price * currentValue.quantity
    }, 0)
    return payment
  },[myCart])
  // khai báo hàm thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    let newProduct: Product = {
      id:1,
      name: 'Coca cola',
      price: 1000,
      quantity: 10
    }
    myCart.push(newProduct)
    setMyCart([...myCart])
  }
  return (
    <div>
        {/* memory: ghi nhớ 
            đây là hook trong reactjs
            sinh ra giúp ghi nhớ lại những tính toán phức tạp và chỉ tính toán lại khi cần thiết
        */}
        <p>Giá phải trả: {price}</p>
        <button onClick={()=>{setCount(count+1)}}>changeCount</button>
        <br />
        <button onClick={addToCart}>add product</button>
    </div>
  )
}
