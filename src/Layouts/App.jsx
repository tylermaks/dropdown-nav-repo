import React, {useState} from "react"
import NavBar from "../Components/NavBar";
import Hero from "./Hero";
import MobileMenu from "./MobileMenu";

import '../Assets/styles/AppStyles/App.css';

function App() {
  const links = ["Features", "Company", "Careers", "About"]
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <main className="App">
      <MobileMenu 
        links={links} 
        clicked={toggleMenu}
        mobileMenu={mobileMenu}
      />
      <NavBar 
        links={links} 
        clicked={toggleMenu}
      />
      <Hero />
    </main>
  );
}

export default App;
