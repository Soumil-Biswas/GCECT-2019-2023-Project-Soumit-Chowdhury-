import React from 'react'
import { Link, useLocation} from 'react-router-dom'

export default function Success() {

    let location = useLocation()

  return (
    <div className="flex flex-col items-center gap-10">        
        <div className='text-green-700 font-bold'>{
            location.pathname.startsWith("/USCDE") ? "The student has been successfully entered in the database." :
            location.pathname.startsWith("/SOCV") ? "Scholarship information has been embedded." :
            location.pathname.startsWith("/SSSVP") ? "Transaction has been verified." : ""
        }</div>

        <Link className="form-button" to={"/"}>Reutrn Home</Link>
    </div>
  )
}
