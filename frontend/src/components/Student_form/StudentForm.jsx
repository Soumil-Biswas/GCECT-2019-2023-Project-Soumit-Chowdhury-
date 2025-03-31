import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'


export default function StudentForm() {
  const [notify, setNotify] = useState("");

  return (
    <div className="grid [grid-template-areas:'stack']">
      {/* Background */}
      <div className='min-h-screen w-full flex flex-col [grid-area:stack]'>
        <img className='h-full object-cover' src="home (2).jpg" alt="" />
      </div>

      <div className="[grid-area:stack] min-h-screen flex flex-col w-full">
        <Header />
        <div className='bg-white/75 flex flex-col gap-10 p-5 sm:px-20 sm:pt-20 sm:pb-10 sm:rounded-3xl mb-10 sm:m-10'>
          <p className='font-bold text-center'>
            This is the website where the Student can enter the transaction details to view the status of their scholarship. 
            This step is mandatory to ensure the amount listed has actually entered the student's account.
          </p>
          {(notify === "") ?
            <Form setNotify={setNotify}/>
            :
            <p className='text-center font-bold text-red-600'>{notify}</p>
          }
        </div>
      </div>   
    </div>
  )
}
