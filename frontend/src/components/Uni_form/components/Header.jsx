import React from 'react'

export default function Header() {
  return (
    <div className='bg-white/50 flex w-full justify-between items-center'>
        <img className='w-16 m-5' src="logo.png" alt="" />
        <p className='text-lg sm:text-2xl text-center font-bold font-[unispace]'>University Side Candidate Database Entry (U S C D E)</p>
        <img className='w-16 m-5' src="logo.png" alt="" />
    </div>
  )
}
