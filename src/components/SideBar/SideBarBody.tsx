import React from 'react';
import {menu} from "../../constant";

const SideBarBody = () => {


  return (
    <div className='w-full bg-[#8F8E8E] px-7 pt-14 h-[calc(100%-65px)]'>
      <div className="space-y-4 pb-7">
        <div className='w-[63px] h-[63px] bg-[#D9D9D9] rounded-full'/>
        <div className="text-white">
          <h3 className="font-bold">Radhika Dhawan Puri</h3>
          <p className="text-sm">Senior Client Services</p>
        </div>
      </div>
      {menu.map((item, idx) => (
        <div className='border-t border-t-[#DCDCDC] space-y-3 text-white pt-7 pb-11' key={idx}>
          <p className='text-[15px]'>{item.title}</p>
          <div className="space-y-2.5 flex flex-col">
            {item.subMenu.map((sub, idxMenu) =>(
              <a
                href={sub.url}
                key={idxMenu}
                className={`font-bold flex items-center ${sub.url === '/' && 'text-brand-blue-dark'}`}
              >
                {sub.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideBarBody;