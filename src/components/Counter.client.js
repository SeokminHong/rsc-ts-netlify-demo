import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <span>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  );
};
