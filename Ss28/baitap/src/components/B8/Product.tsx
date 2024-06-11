interface ProductType {
    id: number
    name: string;
    price: number;
    quantity: number;
  }
  
  const Product: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
      <div>
        <p>id: {product.id}</p>
        <p>Tên sp: {product.name}</p>
        <p>Giá {product.price}</p>
        <p>Số lượng: {product.quantity}</p>
        <hr />
      </div>
    );
  };
  
  export default Product;