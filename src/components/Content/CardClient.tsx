import React, {FC} from 'react';
import threeDots from '../../assets/icons/three-dots.svg'

interface CardClientProps {
  logo: any,
  name: string,
  desc: string
}

const CardClient: FC<CardClientProps> = ({logo, name, desc}) => (
  <div className='w-[259px] h-[184px] pl-5 pr-3 border border-black rounded-md'>
    <div className="h-[66px] w-full flex items-start justify-between pt-4">
      <img className='max-h-[47px]' src={logo} alt=""/>
      <button>
        <img src={threeDots} alt=""/>
      </button>
    </div>
    <div className="space-y-1.5">
      <h3 className='font-bold leading-5'>{name}</h3>
      <p className='text-[11px]'>{desc}</p>
    </div>
  </div>
);

export default CardClient;