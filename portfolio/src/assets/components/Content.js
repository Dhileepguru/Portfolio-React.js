import React from 'react';
import Profile from "../images/profile.png"
import { AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";
import { FaMedium } from "react-icons/fa6";
function Content()
{
    return(
        <section className="bg-black text-gray-100 flex px-5 py-32 justify-center content-style">
        <div className='w-1/2 flex  flex-col'>
        <h1 className='content  py-40 mx-40 text-6xl '>Hi ,<br/>I'm Dhileep D
            <p className='text-2xl py-2 px-1'>I'm a Software Developer</p>
            <div className='py-3 flex  '>
            <a href='#' className='py-5'><AiOutlineLinkedin/></a>
            <a href='#' className='py-5 ml-4'><AiOutlineGithub/></a>
            <a href='#' className='py-5 ml-4'><FaMedium/></a>
            </div>
         </h1>

        </div>
        
        <img className='w-1/3 h-1/3 rounded-full ml-auto mx-40 border-4 border-gray-100 ' src={Profile}></img>
        </section>
    )
}


export default Content;