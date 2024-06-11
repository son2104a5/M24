const ChildComponent = ({ product }: any) => {
  return (
    <div>
      <h3>Product Detail:</h3>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ChildComponent;
