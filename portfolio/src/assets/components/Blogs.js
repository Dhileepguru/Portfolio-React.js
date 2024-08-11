import Recat from 'react';
import blog1 from '../images/blog1.jpeg';
import blog2 from '../images/blog2.jpeg';
function Blogs()
{
    return(
        <section className='bg-black pt-10 text-white'>
         <div className='text-center font-medium p text-7xl pt-10'>
          BLOGS
         </div>
         <div className='justify-center  flex flex-row mt-10'>
            <img  className='flex w-2/4 px-5'src={blog1}></img>
            <img  className='flex w-2/4 px-5'src={blog2}></img>
         </div>
         <div className='bg-black text-white font-medium flex flex-row justify-center'>
            <a className='flex w-2/4 wi mt-10' href="https://medium.com/@dhileepguru497/the-art-of-order-a-personal-journey-41069f5d74e3">The Art of Order</a>
            <a className='mt-10' href="https://medium.com/@dhileepguru497/top-10-inspiring-websites-1a06af217600">Ten Inspired Websites</a>
         </div>
     </section>  
    )
}




export default Blogs;