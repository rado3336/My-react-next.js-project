import HamburgerIcon from "@/icons/HamburgerIcon";
import { Button } from "@mui/material";
import Link from "next/link";
import { FcBiotech } from "react-icons/fc";
import { FC, useEffect, useRef, useState } from "react";
import NavbarLink from "./NavbarLink";
import NavbarLinkExpand from "./NavbarLinkExpand";

export interface INavbarLink {
  id: number;
  title: string;
  href: string;
  subMenu?: ISubNavbarLink [];
}

interface ISubNavbarLink {  
  id: number;
  title: string;
  href: string;
}

interface IMobileNavbarData {
  data: INavbarLink [];
}

const NavbarMobile: FC<IMobileNavbarData> = ({data}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [subMenuHeight, setSubMenuHeight] = useState<number>(0);
  const refSubMenu = useRef<HTMLDivElement>(null);
  
  const menuOpener = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  const subMenuOpener = () =>{
    setIsSubMenuOpen(!isSubMenuOpen);        
  }
  
  useEffect(()=>{
    if (refSubMenu.current) {
      setSubMenuHeight(refSubMenu.current.scrollHeight);
    }
  }, [refSubMenu, isSubMenuOpen])



  return (
    <nav className="flex flex-col items-center text-[24px] font-semibold">
      <div className="flex items-center justify-between w-full bg-navbar-color py-[10px] px-5 z-50">
        <Link href="#">
          <FcBiotech className="text-[48px]" />
        </Link>
        <Button className="" onClick={menuOpener}> <HamburgerIcon/></Button>
      </div>
      <div className={`absolute flex flex-col items-center gap-3 w-full h-screen right-0 left-0 pt-28 bg-navbar-mobile-menu-color ease-in-out duration-500 ${isMenuOpen ? "top-0" : "top-[-100vh]" }`}>
          {data.map((oneLink)=>{
              return oneLink.subMenu ? (
                <div key={oneLink.id}>
                  <NavbarLinkExpand title={oneLink.title} classNameSvg={`${isSubMenuOpen ? "rotate-180" : " "} `} onClickSubMenu={subMenuOpener} />
                  <div className={`overflow-hidden flex flex-col items-center font-normal ease-in-out duration-500 `} ref={refSubMenu} style={{height: isSubMenuOpen ? `${subMenuHeight}px` : "0px" }}>                                                                                                                    
                    {oneLink.subMenu.map((oneSubLink)=>{
                      return <NavbarLink key={oneSubLink.id} href={oneSubLink.href} title={oneSubLink.title} />
                    })}
                  </div>
                </div>
              ): (
                <NavbarLink key={oneLink.id} href={oneLink.href} title={oneLink.title} />
              )
          })}
      </div>
    </nav>
  )
}

export default NavbarMobile;