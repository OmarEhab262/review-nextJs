"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "Reducer", url: "/reducer" },
    { name: "dashboard", url: "/dashboard" },
  ];
  const pathName = usePathname();
  return (
    <>
      <ul className="flex gap-9">
        {links.map((link) => {
          const isActive = pathName.startsWith(link.url);
          return (
            <li
              key={link.name}
              className={`${
                isActive ? "bg-red-600 text-white" : "bg-gray-400 text-black"
              } bg-gray-400 px-4 rounded-md text-black hover:bg-gray-500 duration-200 `}
            >
              <Link href={link.url}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Nav;
