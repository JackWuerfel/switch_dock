"use client";
import classNames from "classnames";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { Sun, Moon01 } from "@untitled-ui/icons-react";
import { useEffect, useMemo, useState } from "react";

import { v4 as uuidv4 } from "uuid";

interface Nav {
  id: string;
  label: string;
  activeRoute: string;
  routeTo: string;
}

const navigation = [
  {
    id: uuidv4(),
    label: "Benefits",
    activeRoute: "/",
    routeTo: "/",
  },
  {
    id: uuidv4(),
    label: "Safety",
    activeRoute: "/safety",
    routeTo: "/safety",
  },
  {
    id: uuidv4(),
    label: "Policies",
    active: false,
    routeTo: "/policies",
    activeRoute: "/policies",
  },
];

const Navbar: React.FC = () => {
  const route = usePathname();
  const search = useSearchParams();
  const navigate = useRouter();
  const [domloaded, setDomloaded] = useState(false);

  const theme = search?.get("theme") ? search.get("theme") : null;

  const current = useMemo(
    () => new URLSearchParams(Array.from(search!.entries())),
    [search]
  ); // -> has to use this form

  const changeTheme = () => {
    current?.set("theme", theme !== "dark" ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      theme !== "dark" ? "dark" : "light"
    );
    const searchParams = current?.toString();
    const query = searchParams ? `?${searchParams}` : "";
    navigate?.push(`${route}${query}`);
  };

  const goHome = () => {
    navigate?.push("/" + "?" + search);
  };

  const goToRoute = (routeTo: string) => {
    navigate?.push(routeTo + "?" + search);
  };

  useEffect(() => {
    setDomloaded(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute(
        "data-theme",
        theme === "dark" ? "dark" : "light"
      );
    }
  }, [theme]);

  return domloaded ? (
    <nav className="navbar">
      <a className="pointer" onClick={() => goHome()}>
        <Image
          src="/logo_white.png"
          width={354}
          height={25}
          alt="switch dock white and red logo"
        />
      </a>
      <ul className="links-wrapper">
        {navigation?.map((nav: Nav) => (
          <a
            className="pointer"
            key={nav.id}
            onClick={() => goToRoute(nav.routeTo)}
            role="link"
          >
            <li className={classNames("links")}>
              {nav.label}
              {nav.activeRoute === route.toString() ? (
                <span className="active-link" />
              ) : null}
            </li>
          </a>
        ))}
        <li
          className={classNames("theme-toggle")}
          onClick={() => changeTheme()}
        >
          {theme !== "dark" ? <Sun /> : <Moon01 />}
        </li>
      </ul>
    </nav>
  ) : null;
};

export default Navbar;
