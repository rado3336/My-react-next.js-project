import Link from "next/link";
import { FC } from "react";

export interface INavbarLink{
    title: string;
    href: string;
}

const NavbarLink: FC<INavbarLink> = ({title, href}) => {
  return (
    <Link href={href}>{title}</Link>
  )
}

export default NavbarLink;