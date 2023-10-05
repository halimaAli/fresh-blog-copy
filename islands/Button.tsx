import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ColoredButton(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-4 border border-yellow-300 rounded shadow"
    />
  );
}
