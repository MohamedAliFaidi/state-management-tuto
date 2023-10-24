import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCountStore } from "./stores/countStore";

function App() {
  const [count, increment, decrement, reset] = useCountStore((state) => [
    state.count,
    state.increment,
    state.decrement,
    state.reset,
  ]);

  return (
    <>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
