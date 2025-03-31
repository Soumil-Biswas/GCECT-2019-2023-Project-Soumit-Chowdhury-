import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'


export default function OfficeForm() {
  return (
    <div className="grid [grid-template-areas:'stack']">
      {/* Background */}
      <div className='min-h-screen w-full flex flex-col [grid-area:stack]'>
        <img className='h-full object-cover' src="home.jpg" alt="" />
      </div>

      <div className="[grid-area:stack] min-h-screen flex flex-col w-full">
        <Header />
        <div className='bg-white/75 flex flex-col gap-10 p-5 sm:px-20 sm:pt-20 sm:pb-10 sm:rounded-3xl mb-10 sm:m-10'>
          <p className='font-bold text-center'>
            This is the website where the Scholarship Office / Agency / Cleint uploads the Student's documents and Biometric Data.
            The data must already be uploaded from the University Side first for this site to be able to verify the candidate. 
            The Candidate may be required to supply OTP (One Time Password) being sent to their device.
            If the Candidate is verified, they are cleared for availing the scholarship fee / stipend from the agency.
            Once the transaction is completed, the candidate will be required to give the fingerpritnt of their left thumb for Verification.
          </p>
          <Outlet/>
        </div>
      </div>   
    </div>
  )
}
