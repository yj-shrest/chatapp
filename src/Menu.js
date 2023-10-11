import React from 'react'

export default function Menu() {
  return (
    <div className='text-center'>

    {/* <div className ="" >Invalid Room code</div> */}
    <h1 className='text-[2rem] mb-4'>Welcome to the OPEN CHAT</h1>
    <div className="flex  flex-col items-center text-center p-5">
    <div>
           <input className='m-2 w-56 focus:outline-none' type="text" id="room-code-input" placeholder="Enter the 6-digit room code..."/>
            <button className='px-2 py-3 w-[10rem] bg-green-500 rounded-[5px] cursor-pointer m-2 text-white' >Join</button>
           
        </div>
      <button className='px-2 py-3 w-[10rem] bg-green-500 rounded-[5px] cursor-pointer m-2 text-white'>Start a Room</button>
        <button className='px-2 py-3 w-[10rem] bg-green-500 rounded-[5px] cursor-pointer m-2 text-white'>Global Room</button>
    </div>
    </div>
  )
}
