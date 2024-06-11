import React, { useEffect, useState } from "react"

type Product = {
    id: number,
    product_name: string,
    image: string,
    price: number,
    quantity: number,
    create_at: string,
}
export default function getAllProducts(){
    const [products, setProducts] = useState<Product[]>([])
    const [value, setValue] = useState<string>('')
        const loadData = () =>{
            fetch('http://localhost:3000/product')
           .then(res => res.json())
           .then(data => setProducts(data))
           .catch(err => console.error(err))
        }
        
        const getProductBYId = () => {
            fetch(`http://localhost:3000/product/4`)
           .then(res => res.json())
           .then(data => {
            if (data){
                console.log(data);
            }else{
                console.log('Không tìm thấy bản ghi');
            }
           })
           .catch(err => console.error(err))
        }
        getProductBYId()
        const removeProductById = (id: number) => {
            fetch(`http://localhost:3000/product/${id}`, {
                method: 'DELETE'
            })
           .then(res => res.json())
        }
        useEffect(()=>{
            loadData()
        }, [products])
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name
            setValue(e.target.value)
            const newProduct = [...products, {name: value}]
        }
        const createProduct = () => {
            fetch('http://localhost:3000/product', {
                method: 'POST',
                headers: {

                },
            })
           .then(res => res.json())
        }
      return (
        <div style={{
            display: 'flex',
            gap: '30px',
        }}>
            <table border={1} style={{ width: '' }}>
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Name</td>
                        <td>Image</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Create_At</td>
                        <td>Option</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.product_name}</td>
                            <td><img style={{
                                height: '100px'
                            }} src={product.image} /></td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.create_at}</td>
                            <td>
                                <button>Sửa</button>
                                <button onClick={()=>removeProductById(product.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <h2>Thêm mới sản phẩm</h2>
                <label htmlFor="">Tên sản phẩm</label>
                <input onChange={handleChange} type="text" name="product_name"/>
                <label htmlFor="">Ảnh</label>
                <input onChange={handleChange} type="text" name="image"/>
                <label htmlFor="">Giá</label>
                <input onChange={handleChange} type="text" name="price"/>
                <label htmlFor="">Số lượng</label>
                <input onChange={handleChange} type="text" name="quantity"/>
                <label htmlFor="">Ngày tạo</label>
                <input onChange={handleChange} type="date" name="create_at"/>
                <button onClick={()=>createProduct()}>Thêm</button>
            </div>
        </div>
      )
}