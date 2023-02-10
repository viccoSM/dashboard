import React from 'react';
import hamburger from '../../assets/icons/humberger.svg'
import logout from '../../assets/icons/logout.svg'
import search from '../../assets/icons/search.svg'

const Header = () => (
  <div className='bg-white h-[65px] border border-black w-full flex justify-between items-center pl-8 pr-9 sticky top-0'>
    <div className="flex items-center space-x-2.5">
      <img src={search} alt=""/>
      <input className="outline-0" type="text" placeholder='Search anything here...'/>
    </div>
    <div className="flex items-center space-x-6">
      <button className='text-[#EE0D0D] font-bold flex items-center space-x-2.5'>
        <img src={logout} alt=""/>
        <p>Logout</p>
      </button>
      <button>
        <img src={hamburger} alt=""/>
      </button>
    </div>
  </div>
);

export default Header;