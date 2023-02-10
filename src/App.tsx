import React from 'react';
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex h-screen bg-[#F5F6FA]">
      <SideBar/>
      <div className="w-full flex-1 bg-white">
        <Header/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
