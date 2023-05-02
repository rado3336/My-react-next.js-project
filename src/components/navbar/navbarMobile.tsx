import HamburgerIcon from "@/icons/HamburgerIcon";
import { Button } from "@mui/material";
import Link from "next/link";
import { FcBiotech } from "react-icons/fc";
import { INavbarLink } from "./NavbarLink";
import { INavbarLinkExpand } from "./NavbarLinkExpand";


interface INavbarMobile {
  navbarLink: INavbarLink[];
  navbarLinkExpand: INavbarLinkExpand[];
}

const NavbarMobile = () => {
  const menuOpener = () =>{
    console.log("42 brm");
    
  } 

  return (
    <nav className="flex items-center justify-between px-8 bg-navbar-color max-h-[80px] h-full w-full">
      <Link href="#">
        <FcBiotech className="text-[48px]" />
      </Link>
      <Button className="" onClick={menuOpener}> <HamburgerIcon/></Button>
    </nav>
  )
}

export default NavbarMobile;