import { FC } from "react";
import NavbarMobile, { INavbarLink } from "./NavbarMobile";


interface INavbarData {
  data: INavbarLink[];
}

const Navbar: FC<INavbarData> = ({data}) => {
  return (
    <nav className="fixed w-full font-sourceCode">
      <NavbarMobile data={data}  />
    </nav>
  )
}

export default Navbar;
