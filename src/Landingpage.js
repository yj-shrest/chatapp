import React from 'react';
import { Link } from 'react-router-dom';
import bg from './assets/bg.jpg';

export default function LandingPage() {
  return (
    <>
    <div className='mx-auto w-[20rem] flex flex-col items-center justify-center pt-[12rem]'>
    <h1 className='text-[2.5rem] text-blue-700 font-bold'>Open Chat</h1>
    <h3 className='text-center text-blue-600 font-semibold text-[1.2rem]'>A platform to chat to anyone, anywhere openly and freely </h3>
    <div className='flex justify-between flex-row w-full px-5'>
      <Link className='bg-blue-600 px-3 py-1 my-3 w-[8.5rem] text-center rounded-2xl text-white text-[1.3rem]'>Login</Link>
      <Link className='bg-blue-600 px-3 py-1 my-3 w-[8.5rem] text-center rounded-2xl text-white text-[1.3rem]'>Sign up</Link>
    </div>
    </div>
    </>
  );
}
