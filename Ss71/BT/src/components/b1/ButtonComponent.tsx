import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../../store/reducers/countReducer';

const ButtonComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default ButtonComponent;
