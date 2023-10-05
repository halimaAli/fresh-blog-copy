import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

interface LayoutProps {
  isLoggedIn: boolean;
  children: ComponentChildren;
  active: string
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Fresh Blog</title>
      </Head>
      <Header active={props.active} loggedIn={props.isLoggedIn} />
      <div class="p-4 mx-auto max-w-screen-md">
        {props.children}
      </div>
      <Footer />
    </>
  );
}

