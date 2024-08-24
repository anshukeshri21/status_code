import React from 'react'
import { SidebarConatiner,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements'
function Sidebar({isOpen , toggle}) {
  return (
    <div>
      <SidebarConatiner isOpen = {isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to = "/home">Home</SidebarLink>
            <SidebarLink to = "/about">About</SidebarLink>
            <SidebarLink to = "/details">Details</SidebarLink>
            <SidebarLink to = "/manual">Manual</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>

        <SideBtnWrap>
          <SidebarRoute>Source Code</SidebarRoute>
        </SideBtnWrap>
      </SidebarConatiner>
    </div>
  )
}

export default Sidebar
