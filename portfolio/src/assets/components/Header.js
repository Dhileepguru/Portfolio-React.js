import React from 'react';

function Header()
{
    return(
    <header className='flex justify-between px-4 my-2 bg text-gray-300 my-2'>
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
    </header>
)
  
}



export default Header;