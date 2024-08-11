import React from 'react';

function About()
{
    return(
        <>
        <section className=' hidden md:block pb-20 bg-black  text-red-50 '>
            <div className=''>
            <h1 className='text-center font-medium text-7xl'>ABOUT ME</h1>
            </div>
           <h1 className='mt-10 text-center w-full text-2xl px-20'>Hi, I'm Dhileep D Currently Pursing a  B.E Computer Science Engineering Final Year at CIT I have Interest In developing Websites with HTML,CSS, JavaScript, Now I am currently learning React.js with Tailwind CSS I am Proficient in FrontEnd Skills and Tools like GIT , GITHUB , Figma (UI/UX), Canva, Medium(Blog)</h1>
           <h2 className='mt-10 text-center w-full text-2xl px-20'></h2>
        </section>
        <section className='block md:hidden bg-black text-red-50 '>
        <div className=''>
        <h1 className='text-center font-medium text-xl'>ABOUT ME</h1>
        </div>
       <h1 className='mt-10 text-center  text-2xl px-2 text-center px-2 '>Hi, I'm Dhileep D Currently Pursing a  B.E Computer Science Engineering Final Year at CIT I have Interest In developing Websites with HTML,CSS, JavaScript, Now I am currently learning React.js with Tailwind CSS I am Proficient in FrontEnd Skills and Tools like GIT , GITHUB , Figma (UI/UX), Canva, Medium(Blog)</h1>
       <h2 className='mt-10 text-center w-full text-2xl px-20'></h2>
    </section>
    </>
    )
}




export default About;