import Link from "next/link";
import { FC } from "react";

interface INavbarLink{
    title: string;
    href: string;
}

const NavbarLink: FC<INavbarLink> = ({title, href}) => {
  return (
    <Link href={href} className="hover:text-navbar-hover-color">{title}</Link>
  )
}

export default NavbarLink;