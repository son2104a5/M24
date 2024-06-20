import { useState } from 'react';
import '../App.css';
import ListProduct from './ListProduct';
import YourCart from './YourCart';
import Notification from './Notification';
import { useDispatch, useSelector } from 'react-redux';

interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface State {
  productReducer: Products[];
  cartReducer: Cart[];
  notification: string;
}

export default function HomeCart() {
  const products = useSelector((state: State)=>state.productReducer)
  const cart = useSelector((state: State)=>state.cartReducer)
  const [action, setAction] = useState<string>('')
  const [notification, setNotification] = useState<string>('');
  const dispatch = useDispatch()

  const handleClick = (product: Products) => {
    dispatch({ type: 'ADDTOCART', payload: product })
    dispatch({ type: 'DECREASE_PRODUCT', payload: product.id })
    setAction('add')
    setNotification(`${product.name} đã được thêm vào giỏ!`);
    setTimeout(() => setNotification(''), 3000);
  };
  const handleDelete = (product: Cart) => {
    dispatch({ type: 'DELETE', payload: product })
    setAction('delete')
    setNotification(`Đã xóa ${product.name} khỏi giỏ hàng!`);
    setTimeout(() => setNotification(''), 3000);
  }
  return (
    <div className="container">
      <div className="page-header">
        <p className='font-bold text-[36px]'>Shopping Cart</p>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              <ListProduct products={products} handleClick={handleClick}></ListProduct>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <YourCart cart={cart} handleDelete={handleDelete}></YourCart>
          </div>
          {notification && <Notification message={notification} action={action}/>}
        </div>
      </div>
    </div>
  );
}
