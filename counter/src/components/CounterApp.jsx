import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);
  const [incrementButtonStyle, setIncrementButtonStyle] = useState({});
  const [decrementButtonStyle, setDecrementButtonStyle] = useState({});
  const [resetButtonStyle, setResetButtonStyle] = useState({});

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrementMouseEnter = () => {
    setIncrementButtonStyle({ color: 'black' });
  };

  const handleIncrementMouseLeave = () => {
    setIncrementButtonStyle({ color: '' });
  };

  const handleDecrementMouseEnter = () => {
    setDecrementButtonStyle({ color: 'black' });
  };

  const handleDecrementMouseLeave = () => {
    setDecrementButtonStyle({ color: '' });
  };

  const handleResetMouseEnter = () => {
    setResetButtonStyle({ color: 'black' });
  };

  const handleResetMouseLeave = () => {
    setResetButtonStyle({ color: '' });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button
        onClick={handleIncrement}
        onMouseEnter={handleIncrementMouseEnter}
        onMouseLeave={handleIncrementMouseLeave}
        style={incrementButtonStyle}
      >
        +
      </button>
      <button
        onClick={handleDecrement}
        onMouseEnter={handleDecrementMouseEnter}
        onMouseLeave={handleDecrementMouseLeave}
        style={decrementButtonStyle}
      >
        -
      </button>
      <button
        onClick={handleReset}
        onMouseEnter={handleResetMouseEnter}
        onMouseLeave={handleResetMouseLeave}
        style={resetButtonStyle}
      >
        Reset
      </button>
    </div>
  );
}
export default CounterApp;
