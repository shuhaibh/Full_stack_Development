import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count+1)
  }

  function handleDec(){
    setCount(count-1)
  }

  return (
    <>
      <p>Count: {count} </p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>        
    </>
  );
}

export default Counter;
