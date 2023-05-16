import ArrowIcon from '@/icons/ArrowIcon';
import React, { FC } from 'react'

interface INavbarLinkExpand{
    title: string;
    onClickSubMenu?: () => void; 
    classNameSvg?: string;    
}


const NavbarLinkExpand: FC<INavbarLinkExpand> = ({title, classNameSvg, onClickSubMenu}) => {
  return (
      <div className='flex justify-center items-center gap-1 group cursor-pointer ' onClick={onClickSubMenu}>
        <p className='group-hover:text-navbar-hover-color '>{title}</p>
        <ArrowIcon classNameSvg={classNameSvg}  />
      </div>  
  )
}

export default NavbarLinkExpand;