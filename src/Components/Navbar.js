import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  return (
    <div>
      <div className="tablet:hidden block absolute w-full sticky">
        <div className="w-full bg-gray-800 text-white">
          <nav>
            <ul>
              <div className="text-center py-5 text-xl">
                <li><NavLink to='/' className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>Home</NavLink></li>
              </div>
              <div className="text-center py-5 text-xl">
                <li><NavLink to='/about' className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>About</NavLink></li>
              </div>
              <div className="text-center py-5 text-xl">
                <li><NavLink to='/techskill' className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>My Technical Skills</NavLink></li>
              </div>
              <div className="text-center py-5 text-xl">
                <li><NavLink to='/softskill' className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>My Soft Skills</NavLink></li>
              </div>
              <div className="text-center py-5 text-xl">
                <li><NavLink to='/project' className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}>My Projects</NavLink></li>
              </div>
            </ul>
          </nav>
        </div>
      </div>

      <div className="tablet:block hidden">
    <nav className="bg-gray-800 p-4 w-full">
      <ul className="flex space-x-10 items-center text-center justify-center">
        <li>
          <NavLink
            to="/"
            exact
            className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-300"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/techskill"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-300"
            }
          >
            My Technical Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/softskill"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-300"
            }
          >
            My Soft Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-300"
            }
          >
            My Projects
          </NavLink>
        </li>
      </ul>
    </nav>
      </div>
    </div>
  );
};

export default Navbar;

// import React from 'react';

// function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <ul className="flex space-x-4">
//         <li><a href="/" className="hover:text-blue-400">Home</a></li>
//         <li><a href="about" className="hover:text-blue-400">About</a></li>
//         <li><a href="services" className="hover:text-blue-400">Services</a></li>
//         <li><a href="contact" className="hover:text-blue-400">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
