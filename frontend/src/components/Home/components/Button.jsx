import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({text, redirect}) {
  return (
    <Link to={redirect} className='w-full h-full'>
      <button className='blue-button'>
          {text}
      </button>
    </Link>
  )
}
