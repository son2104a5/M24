import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const product = {
    id: 1,
    name: 'Product Name',
    price: 10,
    quantity: 5
  };

  return (
    <div>
      <ChildComponent product={product} />
    </div>
  );
};

export default ParentComponent;
