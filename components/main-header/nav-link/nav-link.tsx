"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import { FC } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink: FC<Props> = ({ href, children }) => {
  const path = usePathname();

  console.log(path);
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
