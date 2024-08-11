import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import {useState} from 'react';
function Header()
{
   const[ToggleMenu,setToggleMenu]=useState(false)/*toggle event*/
    return(
    
    <header className='flex justify-between bg  text-gray-300  border-red-50'>
        <a className='font-bold text-xl font-sans my-2 px-6' href="#">PORTFOLIO</a>
        <nav className='hidden md:block'>
        <ul className='flex my-2 font-mono  px-10 text-xl justify-end '>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        {ToggleMenu &&<nav className='block md:hidden mx-5 '>
        <ul className='flex flex-col navmob'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button /*Toggle click event and above nav {} */onClick={()=>setToggleMenu(!ToggleMenu)}className='block md:hidden mx-3'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
    
)
  
}



export default Header;