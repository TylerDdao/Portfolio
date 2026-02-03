import Marquee from "react-fast-marquee";
import TopBar from './components/TopBar';
import { FaAt, FaFile, FaGithub, FaLinkedin } from "react-icons/fa";


function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <div className="font-mono flex flex-col items-center space-y-12 text-charcoal">

    <TopBar />

    <div className="max-w-5xl w-full px-5 py-15 md:p-25 flex flex-col space-y-12">

      <div className="flex flex-col items-center space-y-5">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden border border-charcoal">
          <img
            src="./pics/pfp.PNG"
          />
        </div>
        <p className="text-center">
          Hi everyone! My name is Tyler, and I’m a third-year Computer Science student at Conestoga College specializing in Cyber Security.
        </p>
      </div>

      <div className="w-5 h-5 bg-charcoal rounded-full mx-auto"></div>

      <div className="flex flex-col items-center space-y-5">
        <p className="text-center">
          I enjoy working across the full stack, from building interactive 
          front-end interfaces to designing and implementing reliable back-end 
          systems. I’m particularly interested in developing web-based applications 
          as a full-stack developer. Over the past three years in the program, 
          I’ve gained a strong foundation in software development along with 
          hands-on experience through academic and personal projects.
        </p>

        <div className="font-bold">Programming Languages</div>
        <div className="w-full overflow-hidden">
          <Marquee speed={90}>
            <div className="mx-24">
              <img
                src="./icons/c.png"
                alt="C"
                className="max-h-10"
              />
            </div>
            <div className="mx-24"><img
                src="./icons/cpp.png"
                alt="C++"
                className="max-h-10"
              />
            </div>
            <div className="mx-24">
              <img
                src="./icons/csharp.png"
                alt="C#"
                className="max-h-10"
              />
            </div>
            <div className="mx-24">
              <img
                src="./icons/python.png"
                alt="Python"
                className="max-h-10"
              />
            </div>
            <div className="mx-24">
              <img
                src="./icons/javascript.png"
                alt="JavaScript"
                className="max-h-10"
              />
            </div>
            <div className="mx-24">
              <img
                src="./icons/typescript.png"
                alt="TypeScript"
                className="max-h-10"
              />
            </div>
            <div className="mx-24">
              <img
                src="./icons/java.png"
                alt="Java"
                className="max-h-10"
              />
            </div>
            <div className="mx-24">
              <img
                src="./icons/html.png"
                alt="HTML"
                className="max-h-10"
              />
            </div>
            <div className="mx-24">
              <img
                src="./icons/css.png"
                alt="CSS"
                className="max-h-10"
              />
            </div>
            <div className="mx-24">
              <img
                src="./icons/sql.png"
                alt="SQL"
                className="max-h-10"
              />
            </div>
          </Marquee>
        </div>

        <div className="font-bold mt-5">Operating Systems</div>
        <div className="w-full overflow-hidden">
          <Marquee className="flex justify-between" speed={20}>
            <div className="mx-40">
              <img
                src="./icons/windows.png"
                alt="Windows"
                className="max-h-10"
              />
            </div>
            <div className="mx-40">
              <img
                src="./icons/linux.png"
                alt="Linux"
                className="max-h-10"
              />
            </div>
          </Marquee>
        </div>

        <div className="font-bold mt-5">Tools & Software</div>
        <div className="w-full overflow-hidden">
          <Marquee className="flex justify-between" speed={80}>
            <div className="mx-15">
              <img
                src="./icons/visual_studio.png"
                alt="Visual Studio"
                className="max-h-10"
              />
            </div>
            <div className="mx-15">
              <img
                src="./icons/visual_studio_code.png"
                alt="Visual Studio Code"
                className="max-h-10"
              />
            </div>
            <div className="mx-15"><img
                src="./icons/eclipse.png"
                alt="Eclipse"
                className="max-h-10"
              /></div>
            <div className="mx-15">
              <img
                src="./icons/git.png"
                alt="Git"
                className="max-h-10"
              />
            </div>
            <div className="mx-15">
              <img
                src="./icons/wireshark.png"
                alt="Wireshark"
                className="max-h-10"
              />
            </div>
            <div className="mx-15">
              <img
                src="./icons/opnsense.png"
                alt="OPNsense"
                className="max-h-10"
              />
            </div>
            <div className="mx-15">
              <img
                src="./icons/suricata.png"
                alt="Suricata"
                className="max-h-10"
              />
            </div>
            <div className="mx-15">
              <img
                src="./icons/figma.png"
                alt="Figma"
                className="max-h-10"
              />
            </div>
          </Marquee>
        </div>

        <div className="font-bold mt-5">Database</div>
        <div className="w-full overflow-hidden">
          <Marquee className="flex justify-between" speed={40}>
            <div className="mx-32">
              <img
                src="./icons/mysql.png"
                alt="MySQL"
                className="max-h-10"
              />
            </div>
            <div className="mx-32">
              <img
                src="./icons/postgresql.png"
                alt="PostgreSQL"
                className="max-h-10"
              />
            </div>
            <div className="mx-32">
              <img
                src="./icons/mariadb.png"
                alt="MariaDB"
                className="max-h-10"
              />
            </div>
            <div className="mx-32">
              <img
                src="./icons/mongodb.png"
                alt="Mongo Database"
                className="max-h-10"
              />
            </div>
          </Marquee>
        </div>

        <div className="font-bold mt-5">Frameworks</div>
        <div className="w-full overflow-hidden">
          <Marquee className="flex justify-between" speed={30}>
            <div className="mx-32">
              <img
                src="./icons/nextjs.png"
                alt="Next.JS"
                className="max-h-10"
              />
            </div>
            <div className="mx-32">
              <img
                src="./icons/net.png"
                alt=".NET MAUI"
                className="max-h-10"
              />
            </div>
            <div className="mx-32">
              <img
                src="./icons/reactjs.png"
                alt="React.JS"
                className="max-h-10"
              />
            </div>
          </Marquee>
        </div>

        <div className="font-bold mt-5">Some of my highlighted projects</div>
        
        <a href="https://github.com/TylerDdao/Project5_HR.git">
          <div className="group relative flex flex-col md:space-y-5 p-5 border border-charcoal rounded-md overflow-hidden cursor-pointer md:w-220">
            <p className="text-lg font-bold">HR Management System</p>
            <ul>
              <li>- Implemented Python back-end server</li>
              <li>- Designed front-end using React.js</li>
              <li>- Connected front-end and back-end via RESTful API</li>
              <li>- Ensured code is always in production-ready stage using CI/CD pipelines</li>
            </ul>

            <div className="absolute inset-0 bg-charcoal flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex font-lg text-light_gray space-x-2 items-center">
                <div>Go to Github repository</div>
                <div><FaGithub/></div>
              </div>
            </div>
          </div>
        </a>

        <a href="https://github.com/TylerDdao/Section2_Group4_ProjectIV.git">
          <div className="group relative flex flex-col md:space-y-5 p-5 border border-charcoal rounded-md overflow-hidden cursor-pointer md:w-220">
            <p className="text-lg font-bold">Leaf Laugh Love</p>
            <ul>
              <li>- Structured server-client architecture using Java</li>
              <li>- Designed front-end with Java Swing framework</li>
              <li>- Implemented database management with MySQL</li>
              <li>- Integrated socket programming for server-client communication</li>
            </ul>

            <div className="absolute inset-0 bg-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex font-lg text-light_gray space-x-2 items-center">
                <div>Go to Github repository</div>
                <div><FaGithub/></div>
              </div>
            </div>
          </div>
        </a>

        <a href="https://github.com/TylerDdao/DriveTracker_Group17F24.git">
          <div className="group relative flex flex-col md:space-y-5 p-5 border border-charcoal rounded-md overflow-hidden cursor-pointer md:w-220">
            <p className="text-lg font-bold">Drive Tracker</p>
            <ul>
              <li>- Implemented cross-platform application using C# .NET MAUI</li>
              <li>- Integrated API to retrieve road’s speed limits from a provider and compare it with driver’s real-time speed</li>
              <li>- Utilized Azure for cloud-based data storage</li>
            </ul>

            <div className="absolute inset-0 bg-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex font-lg text-light_gray space-x-2 items-center">
                <div>Go to Github repository</div>
                <div><FaGithub/></div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="w-5 h-5 bg-charcoal rounded-full mx-auto"></div>

      <p className="text-center">
        I’m currently seeking an 8-month co-op opportunity 
        where I can apply my skills in a real-world environment. 
        I’m naturally curious about how systems work and enjoy using 
        technology to reduce repetitive tasks so teams can focus on 
        more meaningful work. I bring strong collaboration skills 
        and have developed leadership experience by serving as a team 
        leader in several project-based courses. Through a co-op role, 
        I’m eager to learn how enterprise-level projects are built and 
        maintained, and to take on challenges beyond the academic setting.
      </p>

      <div className="flex flex-col space-y-3">
        <p className="text-center">Please feel free to contact me or take a 
          look at my resume, my LinkedIn and my Github profile!
        </p>
        <p className="text-center">Thank you so much for your time!!!</p>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-5 justify-center items-center">
        <a  href="./docs/Tyler_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer">
            <div className="border border-charcoal rounded-md p-2 flex justify-center items-center space-x-2 bg-light_gray hover:text-light_gray hover:bg-charcoal transition duration-200 cursor-pointer">
              <FaFile className="w-10 h-10"/>
              <p>My Resume</p>
            </div>
        </a>

        <a  href="https://www.linkedin.com/in/tylerddao/"
          target="_blank"
          rel="noopener noreferrer">
          <div className="border border-charcoal rounded-md p-2 flex items-center space-x-2 bg-light_gray hover:text-light_gray hover:bg-charcoal transition duration-200 cursor-pointer">
            <FaLinkedin className="w-10 h-10"/>
            <p>Duy Bao Nam (Tyler) Dao</p>
          </div>
        </a>

        <a  href="https://github.com/TylerDdao"
          target="_blank"
          rel="noopener noreferrer">
          <div className="border border-charcoal rounded-md p-2 flex items-center space-x-2 bg-light_gray hover:text-light_gray hover:bg-charcoal transition duration-200 cursor-pointer">
            <FaGithub className="w-10 h-10"/>
            <p>@TylerDDao</p>
          </div>
        </a>

      </div>

      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="text-center">You can contact me via my email</div>
        <a  href="mailto:baonamdao05@gmail.com">
          <div className="w-fit border border-charcoal rounded-md p-2 flex items-center space-x-2 bg-light_gray hover:text-light_gray hover:bg-charcoal transition duration-200 cursor-pointer">
            <FaAt className=""/>
            <p>baonamdao@gmail.com</p>
          </div>
        </a>
      </div>

    </div>

    

  </div>

  )
}

export default App
