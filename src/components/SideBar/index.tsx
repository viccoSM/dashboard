import React from 'react';
import SideBarHead from "./SideBarHead";
import SideBarBody from "./SideBarBody";

const SideBar = () => (
  <div className="w-[295px] h-full flex-col">
    <SideBarHead/>
    <SideBarBody/>
  </div>
);

export default SideBar;