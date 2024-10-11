import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ResponsiveDropdown from "./Components/Dropbox"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Techskill from "./Pages/Techskill"
function App() {
  return (
    <Router>
      <div className="mobile:block tablet:hidden w-auto">
      <ResponsiveDropdown/>
      </div>
      <div className="hidden tablet:block">
      <Navbar/>
      </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/techskill" element={<Techskill />} />
          </Routes>
    </Router>
  );
}

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home"
// import About from "./Pages/About"
// import Navbar from './Components/Navbar';  // Import your Navbar component

// function App() {
//   const [isNavbarVisible, setIsNavbarVisible] = useState(false);

//   // Function to toggle the navbar's visibility
//   const toggleNavbar = () => {
//     setIsNavbarVisible(!isNavbarVisible);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Button to toggle the Navbar */}
//         <button onClick={toggleNavbar} className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
//           Toggle Navbar
//         </button>

//         {/* Conditionally render the Navbar */}
//         {isNavbarVisible && <Navbar/>}
//       </header>
//       <Router>
//            <Routes>
//              <Route path="/" element={<Home />} />
//              <Route path="/about" element={<About />} />
//            </Routes>
//      </Router>
//     </div>
//   );
// }

// export default App;
