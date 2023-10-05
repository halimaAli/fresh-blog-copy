// deno-lint-ignore-file no-explicit-any
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.3.1/server.ts";
import Layout from "../../components/Layout..tsx";
import Carousel from "../../islands/Carousel.tsx";
import { State } from "../_middleware.ts";
import Blog_section from "../../components/Blog_section.tsx";
import Counter from "../../islands/Counter.tsx";
import { useSignal } from "https://esm.sh/*@preact/signals@1.1.3";


export const handler: Handlers<any, State> = {
  GET(_req, ctx) {
    return ctx.render({ ...ctx.state });
  },
};

export default function Tasks(props: PageProps) {
  const count = useSignal(777);
  return (
    <>
      <Layout isLoggedIn={props.data.token} active="auth/tasks">
        <section class="bg-white">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
                Deno - Fresh
              </h2>
              <Carousel></Carousel>
              <Counter count = {count}></Counter>
              <p class="font-light text-gray-500 sm:text-xl mt-6">
                This is a demo blog. The following links will redirect you to
                the deno and fresh docs.
              </p>
            </div>
            <div class="grid gap-8 lg:grid-cols-2">
              <Blog_section
                title="The next-gen Framework"
                text="Fresh is a full stack modern web framework for JavaScript and
                  TypeScript developers, designed to make it trivial to create
                  high-quality, performant, and personalized web applications.
                  You can use it to create your home page, a blog, a large web
                  application like GitHub or Twitter, or anything else you can
                  think of."
                url="https://fresh.deno.dev/docs/introduction"
                footnote="Fresh"
              />
              <Blog_section
                title="The easiest, most secure JavaScript runtime."
                text=" Deno will always be distributed as a single executable. Given
                a URL to a Deno program, it is runnable with nothing more than
                the ~31 megabyte zipped executable. Deno explicitly takes on
                the role of both runtime and package manager. It uses a
                standard browser-compatible protocol for loading modules:
                URLs."
                url="https://deno.land/manual@v1.35.3/introduction"
                footnote="Deno"
              />
            
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
