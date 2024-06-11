import Products from './components/Product/Products'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail/ProductDetail'
import NotFound from './components/notFound/NotFound'
import Cart from './components/cart/Cart'

export default function App() {
  return (
    <div>
      {/* 
        Tạo danh sách sp ở trong component Products
        Tạo component Product là từng sp
         + Nút bấm xem chi tiết sp
        Tạo component ProductDetail là chi tiết từng sp

        Các bước làm:
           B1: 
      */}
      <Routes>
        <Route path='/' element={<Products/>}>
          <Route path='productDetail/:productId' element={<ProductDetail/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}
