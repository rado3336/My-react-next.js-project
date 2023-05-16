import { FC } from "react";

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

interface IDesktopNavbarData {
  data: INavbarLink [];
}

const NavbarDesktop: FC<IDesktopNavbarData> = ({data}) => {
  return (
    <nav>
      {data.map((oneLink)=>{
        return oneLink.subMenu ? (<p>adaw</p>): (<p>adawd</p>)
      })}
    </nav>
  )
}

export default NavbarDesktop;