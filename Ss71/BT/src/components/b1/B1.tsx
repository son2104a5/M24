import { useSelector } from 'react-redux';
import ButtonComponent from './ButtonComponent';

const B1 = () => {
  const count = useSelector((state: any) => state.counter.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ButtonComponent></ButtonComponent>
    </div>
  );
};

export default B1;
