import { useAtom } from "jotai";
import { countAtom } from "../store";

function CurrentCount() {
  const [count] = useAtom(countAtom);
  return <div>Current count: {count}</div>;
}
export default CurrentCount;
