import React from 'react';
import Profile from "../images/profile.png"
import { AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";
import { FaMedium } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
function Content()
{
    return(
        <section  id='content'className="bg-black text-gray-100 flex flex-col md:flex-row px-5 md:py-32 justify-center content-style">
        <div className='w-1/2 flex  flex-col'>
        <h1 className='hidden md:block content  py-40 mx-40 text-6xl '>Hi ,<br/>I'm Dhileep D
            <p className='text-2xl py-2 px-1'>I'm a Software Developer</p>
            <div className='py-3 flex  '>
            <a href='https://www.linkedin.com/in/dhileepguru/' className='py-5'><AiOutlineLinkedin/></a>
            <a href='https://github.com/Dhileepguru' className='py-5 ml-4'><AiOutlineGithub/></a>
            <a href='https://medium.com/@dhileepguru497' className='py-5 ml-4'><FaMedium/></a>
            <a href='mailto:dhileepguru497@gmail.com' className='py-5 ml-4'><MdMailOutline/></a>
            </div>
         </h1>
        </div>
        <div id='content' className='md:hidden flex'>
        <img className=' mt-10 size-1/2 md:block md:w-full h-1/2 rounded-full ml-end  border-4 border-gray-100 ' src={Profile}></img>
            <h1 className=' block md:hidden content mt-7  py-10 mx-4 text-xl flex flex-col '>Hi ,<br/>I'm Dhileep D
            <p className='text-sm mt-1 py-2 px-0 '>I'm a Software Developer</p>
            <div className='py-1 flex   '>
            <a href='https://www.linkedin.com/in/dhileepguru/' className='py-5 ml-end'><AiOutlineLinkedin/></a>
            <a href='https://github.com/Dhileepguru' className='py-5 ml-4'><AiOutlineGithub/></a>
            <a href='https://medium.com/@dhileepguru497' className='py-5 ml-4'><FaMedium/></a>
            <a href='mailto:dhileepguru497@gmail.com' className='py-5 ml-4'><MdMailOutline/></a>
            </div>
            
            </h1>
         </div>
        <img className=' hidden md:block md:w-1/3 h-1/3 rounded-full ml-auto mx-40 border-4 border-gray-100 ' src={Profile}></img>
        </section>
    )
}


export default Content;