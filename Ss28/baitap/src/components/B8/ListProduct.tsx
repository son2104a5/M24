import { useState } from 'react';
import Product from './Product';

const ListPost = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'product 1', price: 144252, quantity: 2143 },
    { id: 2, name: 'product 2', price: 435212, quantity: 42523 },
    { id: 3, name: 'product 3', price: 235642, quantity: 6453 }
  ]);

  return (
    <div>
      <h2>List of Posts</h2>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListPost;
