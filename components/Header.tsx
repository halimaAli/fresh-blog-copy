import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";

type Props = {
  active: string;
  loggedIn: boolean;
};

export default function Header({ active, loggedIn }: Props) {
  const loggedInMenus = [
    { name: "Blog", href: "/auth/blog" },
    { name: "Logout", href: "/logout" }
  ];

  const loggedOutMenus = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/login" },
    { name: "SignUp", href: "/signUp" },
  ];

  return (
    <div class="bg-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center flex-1">
        <LemonIcon aria-hidden="true" />
        <div class="text-2xl  ml-1 font-bold">
          Fresh
        </div>
      </div>

      <ul class="flex gap-6">

        {loggedIn
          ? (
            loggedInMenus.map((menu) => (
              <li>
                <a
                  href={menu.href}
                  class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                    (menu.href === active ? " font-bold border-b-2" : "")}
                >
                  {menu.name}
                </a>
              </li>
            ))
          )
          : (
            loggedOutMenus.map((menu) => (
              <li>
                <a
                  href={menu.href}
                  class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                    (menu.href === active ? " font-bold border-b-2" : "")}
                >
                  {menu.name}
                </a>
              </li>
            ))
          )}
      </ul>
    </div>
  );
}
