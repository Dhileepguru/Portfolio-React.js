import React from 'react';
import Project1 from "../images/project1.jpeg"
import Project2 from "../images/project2.jpeg"
function Projects()
{
    return(
     <section  id='projects'className='bg-black text-white'>
         <div className='text-center font-medium text-7xl pt-10'>
          PROJECTS
         </div>
         <div className='justify-center  flex flex-row mt-10'>
            <img  className='flex w-2/4 px-5'src={Project1}></img>
            <img  className='flex w-2/4 px-5'src={Project2}></img>
         </div>
         <div className='bg-black text-white font-medium flex flex-row justify-center'>
            <a className='flex w-2/4 text-gray-300  mt-10' href="https://www.linkedin.com/posts/dhileepguru_project-taxinvoice-responsive-activity-7219716985012527104-7S_7?utm_source=share&utm_medium=member_desktop">Tax Generator</a>
            <a className='mt-10 text-gray-300' href="https://dhileepguru.github.io/E-commerce-clone/#">Nike E-commerce</a>
         </div>
     </section>   
    )
}




export default Projects;