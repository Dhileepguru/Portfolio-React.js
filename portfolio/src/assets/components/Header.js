import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
function Header()
{
    return(
    
    <header className='flex justify-between px-4 bg  text-gray-300 '>
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
        <nav className='block md:hidden'>
        <ul className='flex flex-col navmob'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        <button className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
    
)
  
}



export default Header;