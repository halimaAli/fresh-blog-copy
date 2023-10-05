import { Handlers } from "$fresh/server.ts";
import { deleteCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    const headers = new Headers();

    //delete token from cookies so user is logged out
    deleteCookie(headers, "supaBase");


    // go to home page
    headers.set("location", "/");
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
