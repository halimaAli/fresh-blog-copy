import { asset } from "$fresh/runtime.ts";

export default function Footer() {

  return (
    <footer class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
         <div class="flex-1">
          <a href="https://fresh.deno.dev" target="_blank" class="mt-3 flex items-center gap-1 md:justify-end">
            <img src={asset("/logo.svg")} alt="Fresh logo" class="h-6 w-6"/>
            <span>Made with</span>
            <span class="font-bold">Fresh</span>
          </a>
        </div>
    </footer>
  );
}
