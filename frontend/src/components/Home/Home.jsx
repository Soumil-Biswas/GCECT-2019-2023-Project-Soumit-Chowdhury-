import React from 'react'
import Button from './components/Button'

export default function Home() {
  return (
    <div className="grid [grid-template-areas:'stack']">
      {/* Background */}
      <div className='min-h-screen w-full flex flex-col [grid-area:stack]'>
        <img className='h-screen object-cover' src="skyline-day.jpg" alt="" />
      </div>
      <div className="[grid-area:stack] min-h-screen flex flex-col w-full">
        <div className="min-h-screen flex flex-col w-full justify-center px-5">
          <div className='bg-white/50 flex flex-col md:flex-row gap-20 justify-center p-20 rounded-3xl'>
            <Button text={"University Side Form"} redirect={"/USCDE"}/>
            <Button text={"Scholarship Office Side Form"} redirect={"/SOCV"}/>
            <Button text={"Student Scholarship Verification"} redirect={"/SSSVP"}/>
          </div>
        </div>
      </div>
    </div>    
  )
}
