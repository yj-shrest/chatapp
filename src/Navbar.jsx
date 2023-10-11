import React, { useState } from 'react'
import { Link } from "react-router-dom"
import p from "./assets/Asset 2.png"
import q from "./assets/Asset 3.png"
export default function Navbar() {
  const[stat,setStat]=useState(1)
  return (
    <div className=' bg-blue-700'>
    <div className='mx-auto pt-2 w-[1600px] text-white flex text-[2rem]'>
      <p className='ml-20'>CHAT APP</p>
      <ul className=' ml-[20rem] flex flex-row'>
        <div className='relative'>
          <img src={stat===1?p:q}  className='' alt="" />
          <Link className={`mx-8 rounded-t-xl px-2 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer ${stat===1?"text-blue-700":"text-gray-200"}`}  onClick={()=>setStat(1)}>Home</Link>
        </div>
         <div className='relative'>
          <img src={stat===2?p:q}  className='' alt="" />
          
          <Link className={`mx-8 rounded-t-xl px-2 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer ${stat===2?"text-blue-700":"text-gray-200"}`}  onClick={()=>setStat(2)}>About</Link>
        </div>
        <div className='relative'> 
          <img src={stat===3?p:q}  className='' alt="" />
        
          <Link className={`mx-8 rounded-t-xl px-2 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer ${stat===3?"text-blue-700":"text-gray-200"}`} onClick={()=>setStat(3)}>Login</Link>
        </div>
        <div className='relative'>
          <img src={stat===4?p:q}  className='' alt="" />
          
          <Link className={`mx-8 rounded-t-xl px-2 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center cursor-pointer ${stat===4?"text-blue-700":"text-gray-200"}`} onClick={()=>setStat(4)}>SignUp</Link>
        </div>
      </ul>
    </div>
    </div>
  )
}
