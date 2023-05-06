import React from 'react'
import Headerimage from '../Headerimage'

export default function Header() {
  return (
    <>
     <header>
        <nav>
            <div>
                <Headerimage></Headerimage>
            </div>
            <ul>
                <li><a href=''>Home</a> </li>
                <li><a href=''>About</a> </li>
                <li><a href=''>Products</a> </li>
                <li><a href=''>Contact</a> </li>
            </ul>
        </nav>
     </header>
    
    </>
  )
}
