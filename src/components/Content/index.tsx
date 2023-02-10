import React, {useEffect, useState} from 'react';
import CardClient from "./CardClient";
import {clients} from "../../constant";
import plus from "../../assets/icons/plus.svg"
import axios from "axios";

type DataCoin = Array<{
  image: string
  name: string
  current_price: number
  market_cap: number
}>

const Content = () => {
  const [data, setData] = useState<DataCoin>([])
  const [maxShow, setMaxShow] = useState<number>(3)

  const seeAll = () => {
    if(maxShow === data.length){
      setMaxShow(3)
    }else {
      setMaxShow(data.length)
    }
  }

  const getData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10')
      const {data} = response

      setData(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='pt-8 pr-9 pl-7 h-[calc(100%-65px)] overflow-y-auto'>
      <h1 className='font-bold text-[28px]'>Hi Radhika, welcome back!</h1>

      <div className='pt-11 space-y-6'>
        <div>
          <h3 className='font-bold text-xl'>Your client list</h3>
          <p className='text-sm'>You currently servicing 3 clients</p>
        </div>
        <div className="flex space-x-4">
          {clients.map((item, idx) => (
            <CardClient logo={item.logo} name={item.name} desc={item.desc} key={idx}/>
          ))}
        </div>
      </div>

      <div className='pt-14 space-y-6'>
        <div className='flex items-center justify-between'>
          <div className='block'>
            <h3 className='font-bold text-xl'>Recent Approve</h3>
            <p className='text-sm'>You can find the recent on-going approvals here</p>
          </div>
          <button className="flex items-center px-[22px] py-1.5 border border-black rounded-full space-x-1">
            <img src={plus} alt=""/>
            <p className="font-bold">Create new approval</p>
          </button>
        </div>
        <div className='space-y-3'>
          <div className="grid grid-cols-12 gap-2  border-black border rounded-[5px] py-3 px-4">
            <div className='col-span-2'>
              Image
            </div>
            <div className='col-span-4'>
              Name
            </div>
            <div className='col-span-3'>
              Current Price
            </div>
            <div className='col-span-3'>
              Market Cap
            </div>
          </div>
          {data.filter((item, idx) => idx < maxShow ).map((item, idx) => (
            <div className="grid grid-cols-12 gap-2  border-black border rounded-[5px] py-3 px-4" key={idx}>
              <div className='col-span-2 flex items-center'>
                <img className='max-h-[43px]' src={item.image} alt=""/>
              </div>
              <div className='col-span-4 flex items-center text-[#323A46] font-bold'>
                {item.name}
              </div>
              <div className='col-span-3 flex items-center'>
                {item.current_price}
              </div>
              <div className='col-span-3 flex items-center'>
                {item.market_cap}
              </div>
            </div>
          ))}

          <button onClick={seeAll} className='text-brand-blue-light font-bold'>
            {maxShow === data.length ? 'Show a little':'See all'}
          </button>
        </div>
      </div>
      <div className="mt-16 text-end mb-11">
        © Manning&Co. 2022
      </div>
    </div>
  );
}

export default Content;