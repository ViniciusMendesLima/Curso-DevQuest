import { useState } from "react";
import "./App.css";
import { MyInput } from "./components/MyInput";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };
  return (
    <>
      {/* <p>contador: {count}</p>
      <button onClick={increment}>Incrementar contador</button>
      <button onClick={decrement}>Decrementar contador</button>
      <button onClick={resetCounter}>Resetar contador</button> */}

      <MyInput></MyInput>    </>
  );
}

export default App;
