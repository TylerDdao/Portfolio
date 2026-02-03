import Typewriter from 'typewriter-effect';

export default function TopBar() {
  return(
        <div className='bg-charcoal h-10 md:h-15 fixed flex items-center w-full px-5 z-10'>
            <div className='font-mono text-light_gray md:text-xl font-bold'>
            <Typewriter
                options={{
                strings: [`Hi, I'm Tyler`, `Welcome to my portfolio!`],
                autoStart: true,
                loop: true,
                }}
            />
            </div>
        </div>
  )
}

