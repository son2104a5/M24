import { Link, Outlet, useNavigate } from 'react-router-dom';
import './product.css'

export default function Products() {
    const navigate = useNavigate()
    /*
        Lấy dữ liệu về để render
    */ 
    // fetch data: tạo mock data trước
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
    // hàm click từng sp
    const handleClick = (id: number) => {
        navigate(`/productDetail/${id}`)
    }
  return (
    <>
    <Link to={'/cart'}>Cart</Link>
        <div className='container'>
            {products.map(product =>{
                return (
                    <div key={product.id}>
                        <p>Tên sp: {product.name}</p>
                        <p>Giá: {product.price}</p>
                        <p>Số lượng: {product.stock}</p>
                        <p>Description: {product.description}</p>
                        <p>Ảnh: <img src={product.image} /></p>
                        <p>
                            <button>Mua</button><button onClick={()=>handleClick(product.id)}>Xem chi tiết</button>
                        </p>
                    </div>
                )
            })}
        </div>
        <Outlet></Outlet>
    </>
  )
}
