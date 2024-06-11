import { useParams } from 'react-router-dom'
import './productDetail.css'

export default function ProductDetail() {
    const { productId } = useParams()
    let products = [
        {
            id: 1, 
            name: 'IP13', 
            price: 50000, 
            description: 'sp tốt', 
            stock: 10,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png'
        },
        {
            id: 2, 
            name: 'IP12', 
            price: 40000, 
            description: 'sp tốt', 
            stock: 10,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png'
        },
        {
            id: 3, 
            name: 'IP11', 
            price: 30000, 
            description: 'sp tốt', 
            stock: 10,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png'
        },
        {
            id: 4, 
            name: 'IP15', 
            price: 60000, 
            description: 'sp tốt', 
            stock: 10,
            image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png'
        },
    ]
    let productDetail = products.filter(item => item.id === Number(productId))
  return (
    <div>ProductDetail
        <p>Tên: {productDetail[0].name}</p>
        <p>Giá: {productDetail[0].price}</p>
        <p>Số lượng: {productDetail[0].stock}</p>
        <p>Mô tả: {productDetail[0].description}</p>
        <p>Ảnh: <img src={productDetail[0].image}/></p>
    </div>
  )
}
