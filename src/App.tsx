import { useAtom, useStore } from "jotai";
import { countAtom, increment, decrement, userInfo } from "./store";

function App() {
  const [count, setCount] = useAtom(countAtom);
  const store = useStore();
  const { name, age } = store.get(userInfo);
  return (
    <>
      <h1 className="text-[red]">SU-Taskly</h1>
      <h2>count: {count}</h2>
      <div>
        {name} {age}
      </div>
      <button onClick={() => setCount(increment)}>Increment</button>
      <button onClick={() => setCount(decrement)}>Decrement</button>
    </>
  );
}

export default App;
