import { INavbarLink } from "@/components/navbar/NavbarMobile";


interface INavbarData {
  navbarData: INavbarLink[];
}

export const getNavbarData = async (): Promise<INavbarData> => {
  const res = await fetch("http://localhost:4000/navBar");
  const data = await res.json();
  return {
    navbarData: data,
  };
};
