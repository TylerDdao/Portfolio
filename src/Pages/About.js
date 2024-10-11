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
    <div className='text-center mobile:text-2xl my-10 px-5'>
    <i class="bi bi-star mr-3"></i>
    Hi, my full name is Duy Bao Nam Dao or my English name is Tyler. I am a second year computer science student.
I am currently looking for a Co-op for my Spring term in 2025. This is my Portfolio made by me using React front-end, take a look! You can find all of my technical skills, soft skills and my projects in this portfolio.
    </div>
    <div className="h-1.5 w-auto my-5 bg-gray-300 mobile:mx-20 rounded-full"></div>

    <div className=' place-content-between'>

        <div className='grid justify-items-center mt-5'>
          <div className='w-32 h-32 flex items-center justify-center'>
            <img src={`${process.env.PUBLIC_URL}/images/education.png`} className='w-16'></img>
          </div>
          <div className='text-center'>
          <div className=' mobile:text-2xl'>Conestoga College - Waterloo</div>
          <div className='mobile:text-xl text-nowrap'>Bachelor of Computer Science (Honours)</div>
          <a href=''>
            <button className='mt-5 h-16 border-2 border-gray-800 px-10 rounded hover:bg-gray-800 hover:text-white transition mobile:text-xl'>
            <i class="bi bi-book mr-3"></i>
              For more details</button>
          </a>
          </div>
        </div>

        <div className='grid justify-items-center my-10'>
          <div className='w-32 h-32 flex items-center justify-center'>
          <img src={`${process.env.PUBLIC_URL}/images/gmail.png`} className='w-16'></img>
          </div>
          <div className='text-center'>
          <div className=' mobile:text-2xl'>Email: baonamdao05@gmail.com</div>
          <a href='https://www.linkedin.com/in/tylerddao/' target="_blank">
            <button className='mt-5 h-16 border-2 border-gray-800 px-10 rounded hover:bg-gray-800 hover:text-white transition mobile:text-xl'>
            <i class="bi bi-linkedin mr-3"></i>
              My LinkedIn</button>
          </a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About