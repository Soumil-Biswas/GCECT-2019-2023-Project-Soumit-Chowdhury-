import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'


export default function UniForm() {

  return (
    <div className="grid [grid-template-areas:'stack']">
      {/* Background */}
      <div className='min-h-screen w-full flex flex-col [grid-area:stack]'>
        <img className='h-full object-cover' src="skyline-night.jpg" alt="" />
      </div>

      <div className="[grid-area:stack] min-h-screen flex flex-col w-full">
        <Header />
        <div className='bg-white/75 flex flex-col gap-10 p-5 sm:px-20 sm:pt-20 sm:pb-10 sm:rounded-3xl mb-10 sm:m-10'>
          <p className='font-bold text-center'>
            This is the website where the university uploads the student's information into the database. 
            In the other site, the agency also adds their share of the student's information 
            to match with the existing databse entry and verify the student's identity.
          </p>
          <Outlet/>
        </div>
      </div>   
    </div>
  )
}
