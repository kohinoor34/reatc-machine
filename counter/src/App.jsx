import React, { useState } from "react";

const Counter = () => {
  const [count, updateCounter] = useState(0);
  const [timer, updateTimer] = useState("");

  const AutoIncrement = () => {
    clearInterval(timer);
    const timerId = setInterval(() => {
      updateCounter((p) => p + 1);
    }, 1000);
    updateTimer(timerId);
  };

  const AutoDecrement = () => {
    clearInterval(timer)
    const TimerId = setInterval(() => {
      updateCounter((p) => p - 1);
    }, 1000);
    updateTimer(TimerId);
  };

  const pause = () => clearInterval(timer)

  const reset = () => {
    clearInterval(timer)
    updateCounter(0)
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <div className="btn">
        <button onClick={AutoIncrement}>AutoIncrement</button>
        <button onClick={AutoDecrement}>AutoDecrement</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
