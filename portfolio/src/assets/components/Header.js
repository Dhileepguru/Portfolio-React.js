import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import {useState} from 'react';
function Header()
{
   const[ToggleMenu,setToggleMenu]=useState(false)/*toggle event*/
    return(
    
    <header className='flex justify-between px-4 bg  text-gray-300  border-red-50'>
        <a className='font-bold' href="#">D Dhileep</a>
        <nav className='hidden md:block'>
        <ul className='flex '>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        {ToggleMenu &&<nav className='block md:hidden'>
        <ul className='flex flex-col navmob'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>}
        <button /*Toggle click event and above nav {} */onClick={()=>setToggleMenu(!ToggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
    
)
  
}



export default Header;