import React from 'react'
function Techskill() {
  return (
    <div className='min-h-screen visible'>    
    <div className='justify-center flex mobile:my-10'>
    <div className='mobile:text-4xl font-bold'>
    <i class="bi bi-laptop mr-5"></i>
        My Technical Skills
    </div>
    </div>
    <div className="h-1.5 w-auto mobile:mx-10 my-5 bg-gray-300 rounded-full"></div>
    <div className='text-center mobile:text-2xl my-5 px-5'>Programming Languages</div>
    <div className=' place-content-between'>

        <div className='grid grid-rows-2 justify-items-center mt-5'>
          <div className='flex items-center justify-center hover:scale-110 transition'>
          <img src={`${process.env.PUBLIC_URL}/images/cprogram.png`} className='w-16 h-auto'></img>
          </div>
          <div className=' mobile:text-3xl mt-5 text-center'>C/C++</div>
        </div>

        <div className='grid grid-rows-2 justify-items-center mt-5'>
          <div className='flex items-center justify-center hover:scale-110 transition'>
          <img src={`${process.env.PUBLIC_URL}/images/html.png`} className='w-16 h-auto'></img>
          </div>
          <div className=' mobile:text-3xl mt-5 text-center'>HTML</div>
        </div>

        <div className='grid grid-rows-2 justify-items-center mt-5'>
          <div className='flex items-center justify-center hover:scale-110 transition'>
          <img src={`${process.env.PUBLIC_URL}/images/react.png`} className='w-16 h-auto'></img>
          </div>
          <div className=' mobile:text-3xl mt-5 text-center'>React</div>
        </div>

        <div className='grid grid-rows-2 justify-items-center mt-5'>
          <div className='flex items-center justify-center hover:scale-110 transition'>
          <img src={`${process.env.PUBLIC_URL}/images/sql.png`} className='w-16 h-auto'></img>
          </div>
          <div className=' mobile:text-3xl mt-5 text-center'>SQL</div>
        </div>
    </div>

    <div className="h-1.5 w-auto my-5 bg-gray-300 mobile:mx-20 rounded-full"></div>
    <div className='text-center mobile:text-2xl my-5 px-5'>Software Knowledge</div>

    <div className=' place-content-between'>
      <div className='grid grid-rows-2 justify-items-center mt-5'>
        <div className='flex items-center justify-center hover:scale-110 transition'>
        <img src={`${process.env.PUBLIC_URL}/images/visualstudio.png`} className='w-16 h-auto'></img>
        </div>
        <div className=' mobile:text-3xl mt-5 text-center'>Visual Studio</div>
      </div>

      <div className='grid grid-rows-2 justify-items-center mt-5'>
        <div className='flex items-center justify-center hover:scale-110 transition'>
        <img src={`${process.env.PUBLIC_URL}/images/vscode.png`} className='w-16 h-auto'></img>
        </div>
        <div className=' mobile:text-3xl mt-5 text-center'>Visual Studio Code</div>
      </div>

      <div className='grid grid-rows-2 justify-items-center mt-5'>
        <div className='flex items-center justify-center hover:scale-110 transition'>
        <img src={`${process.env.PUBLIC_URL}/images/git.png`} className='w-16 h-auto'></img>
        </div>
        <div className=' mobile:text-3xl mt-5 text-center'>Git</div>
      </div>

      <div className='grid grid-rows-2 justify-items-center mt-5'>
        <div className='flex items-center justify-center hover:scale-110 transition'>
        <img src={`${process.env.PUBLIC_URL}/images/github.png`} className='w-16 h-auto'></img>
        </div>
        <div className=' mobile:text-3xl mt-5 text-center'>Github Desktop</div>
      </div>

      <div className='grid grid-rows-2 justify-items-center mt-5'>
        <div className='flex items-center justify-center hover:scale-110 transition'>
        <img src={`${process.env.PUBLIC_URL}/images/mysql.png`} className='w-16 h-auto'></img>
        </div>
        <div className=' mobile:text-3xl mt-5 text-center'>MySQL</div>
      </div>
      </div>

    </div>
  )
}

export default Techskill