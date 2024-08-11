import React from 'react';
import Profile from "../images/profile.png"
function Content()
{
    return(
        <section className="bg-black text-gray-100 flex px-5 py-32 justify-center">
         <h1 className='w-1/2 py-40 mx-40 text-4xl'>Hi ,<br/>I'm Dhileep D
            <p className='text-2xl '>I'm a Software Developer</p>
         </h1>
        <img className='w-1/3 rounded-full ml-auto mx-40 border-4 border-gray-100 ' src={Profile}></img>
        </section>
    )
}


export default Content;