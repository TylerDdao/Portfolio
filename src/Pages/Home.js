// import React from 'react'
// import Navbar from '../Components/Navbar'
// import profileImage from '../Pics/demo.jpg'
// import { useNavigate  } from 'react-router-dom'

// function Home() {
//   const navigate = () => useNavigate ;

//   const about = () => {
//     navigate('/about');
//   };

//   return (
//     <div className='min-h-screen bg-white'>
//         <div className='flex justify-center place-items-center pt-32'>
//           <div className='rounded-full overflow-hidden w-80 h-80'>
//             <img src={profileImage} alt='profilePic' className='w-80 h-80'/>
//           </div>
//           <div className='grid grid-rows-2'>
//             <div className='text-8xl'>Hi! My name is Tyler</div>
//             <div className='text-5xl mt-5'>Welcome to my Portfolio!</div>
//           </div>
//         </div>
//         <div className='flex justify-center gap-48'>
//         <div className='grid grid-rows-2 mt-20 justify-items-center'>
//           <div className='bg-black rounded-full w-56 h-56'></div>
//           <div className='text-5xl'>About me</div>
//         </div>

//         <div className='grid grid-rows-2 mt-20 justify-items-center'>
//           <div className='bg-black rounded-full w-56 h-56'></div>
//           <div className='text-5xl'>My Technical Skills</div>
//         </div>

//         <div className='grid grid-rows-2 mt-20 justify-items-center'>
//           <div className='bg-black rounded-full w-56 h-56'></div>
//           <div className='text-5xl'>My Soft Skills</div>
//         </div>

//         <div className='grid grid-rows-2 mt-20 justify-items-center'>
//           <div className='bg-black rounded-full w-56 h-56'></div>
//           <div className='text-5xl'>My Projects</div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import Navbar from '../Components/Navbar';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate(); // Corrected the use of useNavigate

  const handleAboutClick = () => {
    navigate('/about'); // Navigates to the About page
  };
  const handleTechnicalSkillsClick = () => {
    navigate('/techskill'); // Navigates to the About page
  };

  return (
    <div className='min-h-screen bg-white'>
      
      <div className='flex justify-center items-center pt-10'>
        <div className='rounded-full overflow-hidden w-32 h-32 border-slate-300 border-8'>
          <img src={`${process.env.PUBLIC_URL}/images/demo.jpg`} className='w-32 h-auto'></img>
        </div>
        <div className='ml-2'>
          <div className='text-3xl mb-4'>Hi! My name is Tyler</div>
          <div className='text-xl'>Welcome to my Portfolio!</div>
        </div>
      </div>

    <div>
      <NavLink to='/about'>
    <div className='grid justify-items-center my-10 hover:bg-gray-800 transition mx-5 py-5 rounded-xl text-black hover:text-white'>
      <div className='rounded-full overflow-hidden w-32 h-32 flex items-center justify-center'>
        <img src={`${process.env.PUBLIC_URL}/images/aboutme.png`} className='w-16 h-auto'></img>
      </div>
      <div className='text-3xl font-bold mt-2'>About Me</div>
    </div>
    </NavLink>

    <NavLink to='/techskill'>
    <div className='grid justify-items-center my-10 hover:bg-gray-800 transition mx-5 py-5 rounded-xl text-black hover:text-white'>
      <div className='rounded-full overflow-hidden w-32 h-32 flex items-center justify-center'>
        <img src={`${process.env.PUBLIC_URL}/images/techskill.png`} className='w-16 h-auto'></img>
      </div>
      <div className='text-3xl font-bold mt-2'>My Technical Skills</div>
    </div>
    </NavLink>

    <NavLink to='/softskill'>
    <div className='grid justify-items-center my-10 hover:bg-gray-800 transition mx-5 py-5 rounded-xl text-black hover:text-white'>
      <div className='rounded-full overflow-hidden w-32 h-32 flex items-center justify-center'>
        <img src={`${process.env.PUBLIC_URL}/images/softskill.png`} className='w-16 h-auto'></img>
      </div>
      <div className='text-3xl font-bold mt-2'>My Soft Skills</div>
    </div>
    </NavLink>

    <NavLink to='/project'>
    <div className='grid justify-items-center my-10 hover:bg-gray-800 transition mx-5 py-5 rounded-xl text-black hover:text-white'>
      <div className='rounded-full overflow-hidden w-32 h-32 flex items-center justify-center'>
        <img src={`${process.env.PUBLIC_URL}/images/project.png`} className='w-16 h-auto'></img>
      </div>
      <div className='text-3xl font-bold mt-2'>My Projects</div>
    </div>
    </NavLink>
    
    </div>
    </div>
  );
}

export default Home;
