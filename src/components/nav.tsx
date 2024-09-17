"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "Reducer", url: "/reducer" },
    { name: "Dashboard", url: "/dashboard" },
    { name: "F1", url: "/f1" },
  ];

  const pathName = usePathname();

  return (
    <ul className="flex gap-9">
      {links.map((link) => {
        const isHome = link.url === "/";
        const isActive = isHome
          ? pathName === "/" // Exact match for home
          : pathName.startsWith(link.url); // Starts with for other paths

        return (
          <li
            key={link.name}
            className={`${
              isActive ? "bg-red-600 text-white" : "bg-gray-400 text-black"
            } px-4 rounded-md text-black hover:bg-gray-500 duration-200`}
          >
            <Link href={link.url}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
