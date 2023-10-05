import type { Signal } from "@preact/signals";
import Button from "./Button.tsx";


interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6 mt-6 justify-center">
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
