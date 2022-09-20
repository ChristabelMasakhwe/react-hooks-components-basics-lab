import React from "react";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import About from "./About.js";




{/* write an <About> component here */}


function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

export default App;
