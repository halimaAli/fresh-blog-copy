// deno-lint-ignore-file
import { Handlers, PageProps } from "$fresh/server.ts";
import { setCookie } from "https://deno.land/std@0.193.0/http/cookie.ts";
import Layout from "../components/Layout..tsx";
import Button from "../islands/Button.tsx";
import { State } from "./_middleware.ts";

export const handler: Handlers<any, State> = {
  async POST(req, ctx) {
    //get form data from req
    const form = await req.formData();
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    //sign in using supabase
    const { data, error } = await ctx.state.supabaseClient.auth
      .signInWithPassword({ email, password });

    const headers = new Headers();

    //if there is a session, set cookies and add token
    if (data.session) {
      setCookie(headers, {
        name: "supaBase",
        value: data.session?.access_token,
        maxAge: data.session.expires_in,
      });
    }

    //redirect user to home page
    let redirect = "/auth/blog";
    if (error) {
      redirect = `/login?error=${error.message}`;
    }

    headers.set("location", redirect);
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function Login(props: PageProps) {
  const err = props.url.searchParams.get("error");

  return (
    <Layout isLoggedIn={false} active="/login">
      <div class="flex flex-col items-center px-6 py-8 lg:py-0 mt-20">
        <div class="mx-auto">
          <h2 class="text-2xl font-bold mb-5 text-center">Login</h2>
          <p class="font-light text-gray-500 text-center sm:text-xl mt-6">
            This is a demo Login. Signup or use Test-User account:
          </p>
          <p class="font-light text-gray-500 text-center sm:text-xl mt-1">
            test@test.com, password:123456
          </p>
        </div>
        <div class=" bg-gray-200 w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            {err && (
              <div class="bg-red-400 border-l-4 p-4" role="alert">
                <p class="font-bold">Error</p>
                <p>{err}</p>
              </div>
            )}

            <form method="post">
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="fresh@deno.com"
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                />
              </div>
              <Button type="submit">
                Login
              </Button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <a
                  href="/signUp"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
