import { useSelector } from 'react-redux'

interface Product {
    id: number;
    product_name: string;
    price: number;
    stock: number;
}

interface State {
    products: Product[];
}

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
export default function ListProduct() {
    const product = useSelector((state: State) => state.products)
  return (
    <div>
        <table border={1} style={{
            width: '25%'
        }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng (kg)</th>
                    <th colSpan={2}>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.product_name}</td>
                                <td>{VND.format(item.price)}</td>
                                <td>{item.stock}</td>
                                <td><button>Sửa</button></td>
                                <td><button>Xóa</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
