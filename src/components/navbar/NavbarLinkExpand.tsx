import Link from 'next/link'
import React, { FC } from 'react'

export interface INavbarLinkExpand{
    title: string;
    href: string;
    subMenu?: ISubMenu[];
}

interface ISubMenu{
  id: number;
  title: string;
  href: string;
}

const NavbarMobileLink: FC<INavbarLinkExpand> = ({title, href}) => {
  return (
    <Link href={href}>{title}</Link>
  )
}

export default NavbarMobileLink;