// deno-lint-ignore-file
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2"
import { getCookies } from "$std/http/cookie.ts";

export interface State {
  token: string | null;
  supabaseClient: SupabaseClient<any, "public", any>;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {

  // creates supabase client
  const client = createClient('', '',{ auth: { persistSession: false } });
  // assign the client to state in order to have access to it in the routes
  ctx.state.supabaseClient = client;

  // get token from cookies
  const supaCreds = getCookies(req.headers)["supaBase"];

  
  if (!supaCreds) {
    return ctx.next();
  }

  //get user information based on token
  const { error } = await client.auth.getUser(supaCreds);

  if (error) {
    console.log(error.message);
    ctx.state.token = null;
  } else {
    ctx.state.token = supaCreds; //speichert token in ctx
  }

  return await ctx.next();
}
