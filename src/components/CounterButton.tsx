import React from "react";
import { useAtom } from "jotai";
import { countAtom } from "../store";

const CounterButton: React.FC = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      {count}
      <button
        className="border border-cyan-800"
        onClick={() => setCount((num) => num + 1)}
      >
        点击更新count
      </button>
    </div>
  );
};
export default CounterButton;
