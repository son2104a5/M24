import { useSelector, useDispatch } from 'react-redux';

const RandomNumber = () => {
  const numbers = useSelector((state: any) => state.randomNumber);
  const dispatch = useDispatch();

  const handleGenerateNumber = () => {
    dispatch({ type: 'CREATE_NUMBER' });
  };

  return (
    <div>
      <div>{JSON.stringify(numbers)}</div>
      <button onClick={handleGenerateNumber}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;
