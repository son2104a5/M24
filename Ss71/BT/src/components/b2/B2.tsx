import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomNumbers, numbers } from '../../store/reducers/createRandom';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const randomNumber = useSelector((state: any) => state.numbers.randomNumber);
  const handleClick = () => {
    dispatch(generateRandomNumbers());
    console.log(randomNumber);
  };
  return (
    <div>
      <h2>{JSON.stringify(numbers)}</h2>
      <button onClick={handleClick}>Random number</button>
    </div>
  );
};

export default App;
