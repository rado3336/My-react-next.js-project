import Navbar from "@/components/navbar/Navbar";
import { INavbarLink } from "@/components/navbar/NavbarMobile";
import { GetStaticProps } from "next";
import { getNavbarData } from "./api/getNavbarData";
import { FC } from "react";

interface IHomepageProps {
  navbarData: INavbarLink[];
  
}

export const getStaticProps: GetStaticProps = async () => {
  
  const { navbarData } = await getNavbarData();
  
  return {
    props: {
      navbarData,
      
    },
  };
};

const Index: FC<IHomepageProps> = ({navbarData}) => {
  return (
    <div className="">
      <Navbar data={navbarData} />
    </div>
  )
}

export default Index;