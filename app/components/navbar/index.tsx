"use client";
import classNames from "classnames";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { Sun, Moon01 } from "@untitled-ui/icons-react";
import { useEffect, useMemo, useState } from "react";

interface Nav {
  id: string;
  label: string;
  activeRoute: string;
  routeTo: string;
}

const Navbar: React.FC = () => {
  const route = usePathname();
  const search = useSearchParams();
  const navigate = useRouter();
  const [domloaded, setDomloaded] = useState(false);
  const [navigation, setNavigation] = useState([]);

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
    async function fetchLinks() {
      let res = await fetch(window.location.origin + "/api/navigation");
      let data = await res.json();
      setNavigation(data);
    }
    fetchLinks();
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute(
        "data-theme",
        theme === "dark" ? "dark" : "light"
      );
    }
  }, [theme]);

  return domloaded && navigation ? (
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
