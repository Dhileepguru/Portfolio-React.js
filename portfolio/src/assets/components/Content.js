import React from 'react';
import Profile from "../images/profile.png"
function Content()
{
    return(
        <section className="bg-black text-gray-100 flex px-5 py-32">
         <h1 className='w-1/2'>Hi ,<br/>I'm Dhileep D
            <p>I'm a Software Developer</p>
         </h1>
        <img className='w-1/3 rounded-full ml-auto mx-10 ' src={Profile}></img>
        </section>
    )
}


export default Content;