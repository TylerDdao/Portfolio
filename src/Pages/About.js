import React from 'react'
import Navbar from '../Components/Navbar'
function About() {
  return (
    <div className='min-h-screen visible'>    
    <div className='justify-center flex mobile:my-10'>
    <div className='mobile:text-4xl font-bold'>
        About me
    </div>
    </div>
    <div className="h-1.5 w-auto mobile:mx-10 my-10 bg-gray-300 rounded-full"></div>
    <div className='text-center mobile:text-xl my-10 px-5'>
    Hi, my full name is Duy Bao Nam Dao or my English name is Tyler. I am a second year computer science.
I am currently looking for a Co-op for Spring 2025. My preferred co-op position is Software Developer or Web Front-end Developer. This is
my Portfolio made by me using React front-end, take a look!
    </div>
    <div className="h-1.5 w-auto my-5 bg-gray-300 mobile:mx-20 rounded-full"></div>

    <div className=' place-content-between'>

        <div className='grid grid-rows-2 justify-items-center mt-5'>
          <div className='border-slate-300 border-8 rounded-full w-52 h-52'></div>
          <div className='text-center'>
          <div className=' mobile:text-xl mt-5'>Conestoga College - Waterloo</div>
          <div className='mobile:text-xl text-nowrap'>Bachelor of Computer Science (Honours)</div>
          <a href=''>
            <button className='mt-5 h-16 border-2 border-sky-400 px-10 rounded hover:bg-sky-400 hover:text-white transition mobile:text-xl'>For more details</button>
          </a>
          </div>
        </div>

        <div className='grid grid-rows-2 justify-items-center mt-5'>
          <div className='border-slate-300 border-8 rounded-full w-52 h-52'></div>
          <div className='text-center'>
          <div className=' mobile:text-xl mt-5'>Email: baonamdao05@gmail.com</div>
          <a href='https://www.linkedin.com/in/tylerddao/' target="_blank">
            <button className='mt-5 h-16 border-2 border-sky-400 px-10 rounded hover:bg-sky-400 hover:text-white transition mobile:text-xl'>My LinkedIn</button>
          </a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About