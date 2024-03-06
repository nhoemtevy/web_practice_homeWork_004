import React from 'react';
import './App.jsx';
import Component from "./navbar/Navbar.jsx";
import FooterComponent from "./footer/Footer.jsx";
function App() {
  return (
    <>
      {/* header */}
      <header>
        <nav>
          <Component></Component>
        </nav>
      </header>
      {/* main */}

      {/* footer */}
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </>
  )
}

export default App;
