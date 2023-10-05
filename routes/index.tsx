// deno-lint-ignore-file
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.3.1/server.ts";
import Layout from "../components/Layout..tsx";
import { State } from "./_middleware.ts";

export const handler: Handlers<any, State> = {
  GET(_req, ctx) {
    return ctx.render({ ...ctx.state });
  },
};

export default function Home(props: PageProps) {
  return (
    <>
      <Layout isLoggedIn={props.data.token} active="/">
        {props.data.token
          ? (
            <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col justify-center">
              <div class="mx-auto text-center">
                <h1 class="text-2xl font-bold mb-5">
                  Youre still logged in. Log out or go to the blog!
                </h1>
              </div>
            </div>
          )
          : (
            <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col justify-center">
              <div class="mx-auto text-center">
                <h1 class="text-2xl font-bold mb-5">
                  Login to access the blog!
                </h1>
                <a
                  href="/login"
                  type="button"
                  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  Login
                </a>
              </div>
            </div>
          )}
      </Layout>
    </>
  );
}
